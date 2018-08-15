function mainDetail() {
    

    //rest = window.sessionStorage.getItem("rdetail");
    //rest = JSON.parse(rest);
    
    var url = window.location.href;
    if (url.includes("&city=")){
        city = url.split("&city=")[1].split("&")[0];
    }
    else{
        city = '334';
    }
    if (url.includes("&cuisine=")){
        cuisine = url.split("&cuisine=")[1].split("&")[0];
    }
    else{
        cuisine = '0';
    }
    if (url.includes("&page=")){
        page = url.split("&page=")[1].split("&");
        page = parseInt(page)-1;
        page = Math.max(0,page*20-1);
    }
    else{
        page=0;
    }
    num = url.split("&num=")[1].split("&");
    num=  parseInt(num);
    
     api = 'https://api.zomato.com/v2/search.json?city_id=' + city +'&cuisines='+ cuisine +'&start=' + page.toString() +'&count=20&apikey=bb2b9736d46dfe9907e06393396a3b03';
    console.log(api);
    var request = new XMLHttpRequest()
    request.open("GET", api);
    request.onload = function () {
        var data = JSON.parse(this.response);
        foodlist = data.restaurants;
        try {
            rest = foodlist[num].restaurant;
            
            Rname = document.getElementById('name');
            window.sessionStorage.setItem("rname", rest.name);
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
                photoX.addEventListener("click", function(){
                    document.getElementById("pic").src = i.photo.url;
                });
                box.appendChild(photoX);
            });
            
            Rtime = document.getElementById('time');
            const timeList = rest.all_timings_customized.opening_hours;
            timeList.forEach(t => {
                             Rtime.innerHTML = Rtime.innerHTML + t.days +": " +  t.timing + '<br />';
             });
            
            
            locat = document.getElementById('location');
            locat.innerHTML = rest.location.address +'<br />@' + rest.location.locality ;
            //window.sessionStorage.setItem("lat", rest.location.latitude);
            //window.sessionStorage.setItem("lon", rest.location.longitude);
            
            myMap(rest.location.latitude, rest.location.longitude, rest.name)
        }
        catch (err) {
            //
        }
    }
    request.send();

}


function myMap(lat, lon, Rname) {
    //       import map     //
    //rest = window.sessionStorage.getItem("rdetail");
    //rest = JSON.parse(rest);
    //lat = window.sessionStorage.getItem("lat");
    //lon = window.sessionStorage.getItem("lon");
    var mapProp= {
    center:new google.maps.LatLng(lat, lon),
    zoom:12,
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    
    var pos = new google.maps.LatLng(lat, lon);
    var marker = new google.maps.Marker({position:pos});
    marker.setMap(map);
    var infowindow = new google.maps.InfoWindow({
        //content: window.sessionStorage.getItem("rname")
        content: Rname
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
   });
}



/*function MapFun(){
    var Gmap = document.getElementById("googleMap");
    var btn = document.getElementById("btn");
    if (Gmap.style.display == "block"){
        Gmap.style.display = "none";
        btn.innerHTML = "Show Map";
    }
    else{

        Gmap.style.display = "block";
        btn.innerHTML = "Hide Map";
        
    }

    
}

*/

