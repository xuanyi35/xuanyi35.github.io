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
    
  // update CITY name //
    url = window.location.href;
    if ( url.includes("&city=")){
        var cityID = url.split("&city=")[1].split("&")[0].toString();
        var cityNameAPI = 'https://developers.zomato.com/api/v2.1/cities?city_ids='+ cityID +'&apikey=bb2b9736d46dfe9907e06393396a3b03';
        
        var request = new XMLHttpRequest()
        request.open("GET", cityNameAPI);
        request.onload = function () {
            var data = JSON.parse(this.response).location_suggestions[0];
            document.getElementById("city").innerText = data.name;
        }
        request.send();
    }
    else{
        document.getElementById("city").innerText = 'Edmonton, AB';
    }

 ///////////
    var request = new XMLHttpRequest()
    request.open("GET", api);
    request.onload = function () {

        // Begin accessing JSON data here
        var data = JSON.parse(this.response);
        var foodlist = data.restaurants;
//console.log(foodlist);
        try {
            var i =0;
            foodlist.forEach(restaurant => {
                console.log(restaurant);

                const card = document.createElement('div');
                card.setAttribute('class', 'card');

                const name = document.createElement('h4');
                name.textContent = restaurant.restaurant.name;
                const img = document.createElement("img");
                img.src = restaurant.restaurant.photos[0].photo.url;
                img.alt = i.toString();
                const info = document.createElement('p');
                info.innerHTML = "cuisines: " + restaurant.restaurant.cuisines + '<br />'
                             +"@" +restaurant.restaurant.location.locality;
                             
                container.appendChild(card);
                card.appendChild(name);
                card.appendChild(img);
                card.appendChild(info);
                             
                card.onclick = function () {
                             
                    //window.sessionStorage.setItem("rdetail", JSON.stringify(restaurant.restaurant));
                    url = window.location.href;
                    url = url.split("food.html")[1];
                     if (url==""){
                        window.open("detail.html"+"?&num="+ img.alt );
                     }
                     else{
                        window.open("detail.html"+url+"&num="+ img.alt );
                     }
                }
                i+=1;
            });
        }
        catch (err) {
            //
        }
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
    //////// api
    if (url.includes("&cuisine=")) {
        if (url.includes("&city=")) {
            var cityID = url.split("&city=")[1].split("&")[0];
            window.sessionStorage.setItem("apiurl",'https://api.zomato.com/v2/search.json?city_id=' + cityID +'&cuisines='+ url.split("&cuisine=")[1].split("&page=")[0] + '&start=0&count=20&apikey=bb2b9736d46dfe9907e06393396a3b03');
        }
        else{
            window.sessionStorage.setItem("apiurl",'https://api.zomato.com/v2/search.json?city_id=334&cuisines='+ url.split("&cuisine=")[1].split("&page=")[0] + '&start=0&count=20&apikey=bb2b9736d46dfe9907e06393396a3b03');
        }
       
    }
    else if (url.includes("&key=")){
        if (url.includes("&city=")) {
             var cityID = url.split("&city=")[1].split("&")[0];
             window.sessionStorage.setItem("apiurl", 'https://api.zomato.com/v2/search.json?city_id=' + cityID + '&q=' + url.split("&key=")[1].split("&page=")[0]  + '&start=0&count=20&apikey=bb2b9736d46dfe9907e06393396a3b03' );
        }
         else{
             window.sessionStorage.setItem("apiurl", 'https://api.zomato.com/v2/search.json?city_id=334&q=' + url.split("&key=")[1].split("&page=")[0]  + '&start=0&count=20&apikey=bb2b9736d46dfe9907e06393396a3b03');
        }
    /////////////
    }
    else {
        if (url.includes("&city=")) {
            var cityID = url.split("&city=")[1].split("&")[0].toString();
            window.sessionStorage.setItem("apiurl",'https://api.zomato.com/v2/search.json?city_id='+ cityID +'&start=0&count=20&apikey=bb2b9736d46dfe9907e06393396a3b03');
        }
        else{
            window.sessionStorage.setItem("apiurl", apiurl);
        }
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


function byCuisine() {
    var CuiAPI = 'https://developers.zomato.com/api/v2.1/cuisines?city_id=334&apikey=bb2b9736d46dfe9907e06393396a3b03';
    if (url.includes("&city=")) {
        var cityID = url.split("&city=")[1].split("&")[0];
        CuiAPI = 'https://developers.zomato.com/api/v2.1/cuisines?city_id=' + cityID +'&apikey=bb2b9736d46dfe9907e06393396a3b03';
    }
    
    const box = document.getElementById("cuisines");
    if (box.style.display == "block") {
        box.style.display = "none";
    }
    else {
        box.style.display = "block";
        var x = document.createElement("TABLE");
        x.setAttribute("id", "tb");
       // x.style.width = "80";
        box.appendChild(x);
        
        var request = new XMLHttpRequest()
        request.open("GET", CuiAPI);
        request.onload = function () {
            
            // Begin accessing JSON data here
            var CuiList = JSON.parse(this.response).cuisines;
            var i = 0;
            var y = x.insertRow(0);
            
            for (i; i < CuiList.length; i++) {
                var cui = CuiList[i].cuisine;
                funstr = "GenreAPI(" + cui.cuisine_id +  ")";
                if ((1 + i) % 4 == 1) {
                    var y = x.insertRow(Math.floor((1 + i) / 4));
                    var z = y.insertCell((1 + i) % 4 - 1);
                    z.innerHTML = cui.cuisine_name;
                    z.style.border = "2px solid rgb(228, 227, 247)";
                    z.style.padding = "0px 1px 1px 0px";
                    z.setAttribute("onclick", funstr);
                }
                else {
                    var z = y.insertCell((1 + i) % 4 - 1);
                    z.innerHTML = cui.cuisine_name;
                    z.style.border = "2px solid rgb(228, 227, 247)";
                    z.style.padding = "0px 1px 1px 0px";
                    z.setAttribute("onclick", funstr);
                }
            }
            var j = 4 - (CuiList.length % 4);
            while ((j > 0) && (j!=4) ){
                var z = y.insertCell(4 - j);
                z.innerHTML = "";
                z.style.border = "2px solid rgb(228, 227, 247)";
                j -= 1;
            }
            
        }
        
        request.send();
    }
    
}


function GenreAPI(cid){
    window.sessionStorage.setItem("page", '1');
    apiurl ='https://api.zomato.com/v2/search.json?city_id=334&cuisines='+ cid + '&start=0&count=20&apikey=bb2b9736d46dfe9907e06393396a3b03';
    window.sessionStorage.setItem("apiurl", apiurl);
    
    url = window.location.href;
    if (url.includes("&cuisine=")) {
        pre = url.split("&cuisine=");
        window.location.href = pre[0] + "&cuisine=" + cid;
    }
    /*else if (url.includes("&page=")) {
        pre = url.split("&page=");
        window.location.href = pre[0] + "&cuisine=" + cid;
    }
    else {
        window.location.search += "&cuisine=" + cid;
    }*/
    else if (url.includes("&city=")) {
        pre = url.split("&city=");
        window.location.href = pre[0] + "&city=" + url.split("&city=")[1].split("&")[0] + "&cuisine=" + cid;
    }
    else {
        window.location.href = url.split("food.html")[0]+ "food.html?&cuisine=" + cid;
    }
}

function GoCity(){
    var cityIn = document.getElementById("cityIn").value;
    document.getElementById("cityIn").value ="";
    if (cityIn.length!=0){
        var cityApi = 'https://developers.zomato.com/api/v2.1/cities?q='+ cityIn +'&apikey=bb2b9736d46dfe9907e06393396a3b03';
        var request = new XMLHttpRequest()
        request.open("GET", cityApi);
        request.onload = function () {
            var cityList = JSON.parse(this.response).location_suggestions;
            if (cityList.length ==0){
                document.getElementById("root").innerText = "Sorry we cannot find such city";
                document.getElementById("city").innerText = "N/A";
            }
            else{
                //document.getElementById("city").innerText = cityList[0].name;
                url = window.location.href;
                if (url.includes("&city=")) {
                    pre = url.split("?&city=");
                    window.location.href = pre[0] + "?&city=" + cityList[0].id;
                }
                else {
                    pre = url.split("food.html")
                    window.location.href = pre[0] + "food.html?&city=" + cityList[0].id;
                }
            }
            
        }
      request.send();
    }
}

function findRes(){
    var ResIn = document.getElementById("cityIn").value;
    document.getElementById("cityIn").value ="";
    if (cityIn.length!=0){
        url = window.location.href;
        if (url.includes("&city=")){
            cityID = url.split("&city=")[1].split("&")[0]
        }
        else{
            cityID = '334';
        }
        var ResApi = 'https://api.zomato.com/v2/search.json?city_id=' + cityID + '&q=' + ResIn + '&start=0&count=20&apikey=bb2b9736d46dfe9907e06393396a3b03';
        window.sessionStorage.setItem("apiurl", ResApi);
        
        if (url.includes("&key=")) {
            pre = url.split("&key=");
            window.location.href = pre[0] + "&key=" + ResIn;
        }
        else if (url.includes("&city=")) {
            pre = url.split("&city=");
            window.location.href = pre[0] + "&city=" + cityID + "&key="  + ResIn;
        }
        else {
            window.location.href = url.split("food.html")[0]+ "food.html?&key=" + ResIn;
        }
    }
}




// get city https://developers.zomato.com/api/v2.1/cities?q=new&apikey=bb2b9736d46dfe9907e06393396a3b03
// cuision ids https://developers.zomato.com/api/v2.1/cuisines?city_id=334&apikey=bb2b9736d46dfe9907e06393396a3b03
// with cuision https://api.zomato.com/v2/search.json?city_id=334&cuisines=6&start=0&count=20&apikey=bb2b9736d46dfe9907e06393396a3b03






