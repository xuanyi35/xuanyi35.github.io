function mainDetail() {
    

    rest = window.sessionStorage.getItem("rdetail");
    rest = JSON.parse(rest);

    //console.log(rest);
    
    Rname = document.getElementById('name');
    Rname.innerHTML = rest.name;

    img = document.getElementById('pic');
    img.src = rest.photos[0].photo.url;
    
    
    cuisines = document.getElementById('cuisines');
    cuisines.innerHTML = "Cuisines: " + rest.cuisines;
    
    const box = document.getElementById('box2');
    imgList = rest.photos;
    imgList.forEach(i => {
        var photoX = document.createElement("IMG");
        photoX.src = i.photo.url;
        box.appendChild(photoX);
                     
    });
    
    
    
    Rtime = document.getElementById('time');
    const timeList = rest.all_timings_customized.opening_hours;
    timeList.forEach(t => {
         Rtime.innerHTML = Rtime.innerHTML + t.days +": " +  t.timing + '<br />';
    });

    
    locat = document.getElementById('location');
    locat.innerHTML = rest.location.address +'<br />@' + rest.location.locality ;

    //updateURL();
}




function updateURL() {
    url = window.location.href;
    addURL = "?mid=" + window.sessionStorage.getItem("mid").toString();
    if (url.includes("?mid=")) {
        pre = url.split("?mid=");
        if (! (pre[1] === window.sessionStorage.getItem("mid").toString()) ){
            window.location.href = pre[0] + addURL;
        }
    }
    else {
        window.location.search += addURL;
    }
    
}

function MapFun(){
    var Gmap = document.getElementById("googleMap");
    var btn = document.getElementById("btn");
    if (Gmap.style.display == "block"){
        Gmap.style.display = "none";
        btn.innerHTML = "Show Map";

        //window.scrollTo(0,document.body.scrollHeight);

    }
    else{

        Gmap.style.display = "block";
        btn.innerHTML = "Hide Map";
        
    }
    
    
}



