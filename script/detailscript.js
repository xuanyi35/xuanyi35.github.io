function mainDetail() {
    rest = window.sessionStorage.getItem("rdetail");
    rest = JSON.parse(rest);
    console.log(rest);
    
    Rname = document.getElementById('name');
    Rname.innerHTML = rest.name;

    img = document.getElementById('pic');
    img.src = rest.photos[0].photo.url;
    
    
    cuisines = document.getElementById('cuisines');
    cuisines.innerHTML = "Cuisines: " + rest.cuisines;
    ;
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
