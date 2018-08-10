var apiurl = 'https://api.zomato.com/v2/search.json?city_id=334&start=0&count=20&apikey=bb2b9736d46dfe9907e06393396a3b03';

function loadMain() {
  
    console.log("in");

    const app = document.getElementById('root');


    const container = document.createElement('div');				// root append container
    container.setAttribute('class', 'container');
    app.appendChild(container);

    //checkURLpage();

    //api = getApi();
	//console.log(api);
     api = apiurl;
	
    var page = getPage();
    document.getElementById('page').innerHTML = page;
  

var request = new XMLHttpRequest()
    request.open("GET", api);
    request.onload = function () {

        // Begin accessing JSON data here
        var data = JSON.parse(this.response);
        var foodlist = data.restaurants;
 	// Log each movie's title & picture
        foodlist.forEach(restaurant => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const name = document.createElement('h4');
            name.textContent = restaurant.restaurant.name;
       console.log(restaurant.restaurant.name);
            const img = document.createElement("img");
            img.src = restaurant.restaurant.photos[1].photo.url;
         

            container.appendChild(card);					// container append cards (movies)
            card.appendChild(name);
           
            card.appendChild(img);

  
    
    

        });

    }
    request.send();


// add buttons below page
    const bar = document.createElement('div');
    bar.setAttribute('class', 'bar');
    app.appendChild(bar);

    const previous = document.createElement('button');
    previous.setAttribute('id', 'previousBelow');
    previous.innerHTML = '<';
    bar.appendChild(previous);
    document.getElementById('previousBelow').onclick = previousClick;

    const pp = document.createElement('p');
    pp.setAttribute('id', 'pageBelow');
    pp.innerHTML = page;
    bar.appendChild(pp);

    const next = document.createElement('button');
    next.setAttribute('id', 'nextBelow');
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
    godown.innerHTML = 'Go!';
    godown.style.width="3%";
    bar.appendChild(godown);
    document.getElementById('godown').onclick = jumpPage;


}











// jump to next page
function nextClick() {
    Ipage = Number(document.getElementById('page').innerText) +1 
    //document.getElementById('page').innerText = Ipage.toString();

    window.sessionStorage.setItem("page", Ipage.toString());
    //location.reload();
    updateURL();
}

// jump to previous page
function previousClick() {
    Ipage = Number(document.getElementById('page').innerText) -1
    if (Ipage > 0 ){
    	//document.getElementById('page').innerText = Ipage.toString();

        window.sessionStorage.setItem("page", Ipage.toString());
    	//location.reload();
    	updateURL();
    }
   
}

// get previous page number
function getPage() {
    //var pg = document.getElementById('page').innerText;
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
    //document.getElementById('page').innerText = Ipage;     

    window.sessionStorage.setItem("page", Ipage);
    //location.reload();

    updateURL();

}


/////////////////////////////////////////////////////////////////////



/*
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
    if (url.includes("&WithTitle=")) {
        window.sessionStorage.setItem("apiurl", 'https://api.themoviedb.org/3/search/movie?api_key=b7f9af2647fdef6d0633f07337802317&query=' + url.split("&WithTitle=")[1]);
    }
    else if (url.includes("&WithGenres=")){

	if (url.includes("&page=")){
	    window.sessionStorage.setItem ("apiurl", 'https://api.themoviedb.org/3/discover/movie?api_key=b7f9af2647fdef6d0633f07337802317&sort_by=popularity.desc&page=1&with_genres=' + url.split("&WithGenres=")[1].split("&page=")[0]) ;
    	}
	else{
	

	    window.sessionStorage.setItem ("apiurl", 'https://api.themoviedb.org/3/discover/movie?api_key=b7f9af2647fdef6d0633f07337802317&sort_by=popularity.desc&page=1&with_genres=' + url.split("&WithGenres=")[1]) ;
	}
    }
    else {
        window.sessionStorage.setItem("apiurl", apiurl);
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
        pre = apig.split('&page=');
        apig = pre[0] + '&page=' + page;
        if (pre[1].includes("&with_genres=")){
	    apig = apig + "&with_genres=" + pre[1].split("&with_genres=")[1];
	}
        window.sessionStorage.setItem("apiurl", apig);
    }
	console.log(apig);
    return apig;
}*/


function byTitle(){
    key = document.getElementById('key').value;

    if (key!=''){
    	apiurl = 'https://api.themoviedb.org/3/search/movie?api_key=b7f9af2647fdef6d0633f07337802317&query='+key+'&page=1'
    	window.sessionStorage.setItem("page", '1');
	window.sessionStorage.setItem("apiurl", apiurl);

 	url = window.location.href;

 	if ( url.includes("&page=")){
		pre = url.split("&page=");
      		window.location.href = pre[0]+ "&WithTitle=" + key;
        }
	else {
		window.location.search += "&WithTitle=" + key;
	}
    }
}






function byGenre(){
    document.getElementById("dowmBox").style.display = "block";
    var generAPI = 'https://api.themoviedb.org/3/genre/movie/list?api_key=b7f9af2647fdef6d0633f07337802317';
    const box = document.getElementById("geners");
    if (box.style.display=="block"){
	box.style.display="none";
  	box.removeChild(document.getElementById("tb"));
    }
    else{
    	box.style.display="block";
    	var x = document.createElement("TABLE");
  	x.setAttribute("id", "tb");
	x.style.float="right";
	x.style.width = "100%";
	x.style.overflow =" scroll";
    	box.appendChild(x);

    	var request = new XMLHttpRequest()
    	    request.open("GET", generAPI);
    	    request.onload = function () {

            	// Begin accessing JSON data here
            	var generList = JSON.parse(this.response).genres;
	    	console.log(generList);	
	   	 var i =0;
	  	 var y = x.insertRow(0);

	    	for (i; i< generList.length; i++){ 
		    var gener = generList[i];
		    funstr = "GenreAPI(" + gener.id  + ")";
		    if ((1+i) % 4 ==1){
			var y = x.insertRow(Math.floor((1+i) / 4));
			var z = y.insertCell((1+i) % 4 -1);
 		    	z.innerHTML= gener.name ;
			z.style.border = "2px solid rgb(228, 227, 247)";
			z.style.padding = "0px 1px 1px 0px";
			z.setAttribute("onclick", funstr);
		    }
		    else{
			var z = y.insertCell((1+i) % 4 -1);
 		    	z.innerHTML= gener.name ;
			z.style.border = "2px solid rgb(228, 227, 247)";
			z.style.padding = "0px 1px 1px 0px";
			z.setAttribute("onclick", funstr);
		    }		
	       }
		var j = 4 - (generList.length % 4);
		while( j>0 ){
		    var z = y.insertCell(4-j);
 		    z.innerHTML="" ;
		    z.style.border = "2px solid rgb(228, 227, 247)";
		    j -= 1;
		}

    	}
   
        request.send();
    }
}


function GenreAPI(gid){



   console.log(gid);
    apiurl = 'https://api.themoviedb.org/3/discover/movie?api_key=b7f9af2647fdef6d0633f07337802317&sort_by=popularity.desc&page=1&with_genres=' + gid ;
    window.sessionStorage.setItem("page", '1');
    window.sessionStorage.setItem("apiurl", apiurl);

    url = window.location.href;
    if ( url.includes("&WithGenres=")){
	
    	pre = url.split("&WithGenres=");
    	window.location.href = pre[0]+ "&WithGenres=" + gid;
    }
    else if ( url.includes("&page=")){
	pre = url.split("&page=");
      	window.location.href = pre[0]+ "&WithGenres=" + gid;
    }
    else {
	window.location.search += "&WithGenres=" + gid;
    }

}












