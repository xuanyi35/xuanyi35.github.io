var apiurl = 'https://api.zomato.com/v2/search.json?city_id=334&start=0&count=20&apikey=bb2b9736d46dfe9907e06393396a3b03';

function loadMain() {
    const app = document.getElementById('root');

    const container = document.createElement('div');				// root append container
    container.setAttribute('class', 'container');
    app.appendChild(container);

    checkURLpage();

    api = getApi();
    var page = getPage();
    document.getElementById('page').innerHTML = page;
  

var request = new XMLHttpRequest()
    request.open("GET", api);
    request.onload = function () {

        // Begin accessing JSON data here
        var data = JSON.parse(this.response);
        var foodlist = data.restaurants;
        console.log(foodlist);
        foodlist.forEach(restaurant => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const name = document.createElement('h4');
            name.textContent = restaurant.restaurant.name;
            const img = document.createElement("img");
            img.src = restaurant.restaurant.photos[0].photo.url;
            const info = document.createElement('p');
            info.innerHTML = "cuisines: " + restaurant.restaurant.cuisines + '<br />'
                         +"@" +restaurant.restaurant.location.locality;
                         
            container.appendChild(card);
            card.appendChild(name);
            card.appendChild(img);
            card.appendChild(info);

             card.onclick = function () {
                window.sessionStorage.setItem("rdetail", JSON.stringify(restaurant.restaurant));
                window.location.href = "detail.html";

             
             }
    
    

        });

    }
    request.send();


// add buttons below page
    const bar = document.createElement('div');
    bar.setAttribute('class', 'bar');
    app.appendChild(bar);

    const previous = document.createElement('button');
    previous.setAttribute('id', 'previousBelow');
    previous.setAttribute('class', 'btn1');
    previous.innerHTML = '<';
    bar.appendChild(previous);
    document.getElementById('previousBelow').onclick = previousClick;

    const pp = document.createElement('p');
    pp.setAttribute('id', 'pageBelow');
    pp.innerHTML = page;
    bar.appendChild(pp);

    const next = document.createElement('button');
    next.setAttribute('id', 'nextBelow');
    next.setAttribute('class', 'btn1');
    next.innerHTML = '>';
    bar.appendChild(next);
    document.getElementById('nextBelow').onclick = nextClick;

// jump page field
    const tp = document.createElement("INPUT");
    tp.setAttribute("type", "text");
    tp.setAttribute("id", "tpdown");
    tp.style.width="40px";
    tp.style.marginLeft = "30px";
    bar.appendChild(tp);
 
    const godown = document.createElement('button');
    godown.setAttribute('id', 'godown');
    godown.setAttribute('class', 'btn1');
    godown.innerHTML = 'Go!';
    bar.appendChild(godown);
    document.getElementById('godown').onclick = jumpPage;


}



// jump to next page
function nextClick() {
    Ipage = Number(document.getElementById('page').innerText) +1
    window.sessionStorage.setItem("page", Ipage.toString());
    updateURL();
}

// jump to previous page
function previousClick() {
    Ipage = Number(document.getElementById('page').innerText) -1
    if (Ipage > 0 ){
        window.sessionStorage.setItem("page", Ipage.toString());
    	updateURL();
    }
   
}

// get previous page number
function getPage() {
    var pg = window.sessionStorage.getItem("page");
    if (pg==null){
        console.log('1');
	return '1';
    }
    else{
    	return pg;
    }

}



// jump to a page by number
function jumpPage(){
    Ipage = document.getElementById('toPage').value;
    document.getElementById('toPage').value =null;
    if (Ipage == ''){
        Ipage = document.getElementById("tpdown").value;
        document.getElementById("tpdown").value = null;
    }
    if (Ipage != ''){
        window.sessionStorage.setItem("page", Ipage);
        updateURL();
    }

}


/////////////////////////////////////////////////////////////////////




function updateURL(){	
    url = window.location.href;
    addURL = "&page=" + getPage();
    if ( url.includes("&page=")){
	pre = url.split("&page=");
      	window.location.href = pre[0]+ addURL;
    }
    else{
         window.location.search+=addURL ;
    }

}


function checkURLpage() {
    current = getPage();
    url = window.location.href;
    if (url.includes("&page=")) {
        newp = url.split("&page=")[1];

        if (!(current === newp)) {
            window.sessionStorage.setItem("page", newp);
        }
    }
    else {
        window.sessionStorage.setItem("page", '1');
    }
    
}


function getApi() {
    var apig = window.sessionStorage.getItem("apiurl");
	
    if (apig == null) {
        window.sessionStorage.setItem("apiurl", apiurl);
        return apiurl;
    }
    else {
       
        page = getPage();
        page = parseInt(page)-1;
        page = Math.max(0,page*20-1);
        pre = apig.split('&start=');
        apig = pre[0] + '&start=' + page.toString()+ "&count=" +pre[1].split("&count=")[1];
        
	}
    window.sessionStorage.setItem("apiurl", apig);
    
    return apig;
}

