url = window.location.href;
board = document.getElementById("board");
demo = document.getElementById("demo");

if  (url.includes("Website")){
     board.style.display = "none";
     demo.style.display = "block";
	
    Pname = document.getElementById("Pname");
    Pname.innerText = "Movie Station";
    subname = document.getElementById("subname");
    subname.innerText = "Solo ASP.NET CORE MVC Web Project";
    
    description = document.getElementById("desc");
    description.innerHTML = ' Solo project for practice. <br/> HTML5, CSS, Javascript & c#, ASP.NET CORE 2.0, Entity Framework Core & MSSQL, LiINQ. <br/> This website is used to Explore Movies. <br/><br/>Features: <br/><br/> 1. Show Latest Movies<br/> 2. Search Movie by Keyword/Genre <br/> 3. View Movie details <BR/> 4. Recommend Similar Movies<br/> 5. View Trailer <br/> 6. Add to your Favourite Movie List <br/>7. Login/Sign up to organize your favourtie movie list</br/>8. Wait for you to Explore More!';
    
    ui = document.getElementById("ui");
    ui. src = "../img/Movie_UI.png";
    ui.onclick = function () {
		window.open("../img/Movie_UI.png");
    } 
     
    /*var link = "https://www.youtube.com/embed/LeQVUgIUshQ";*/
    video = document.getElementById("video");
   /* video. src = link;*/
    video.style.display = "none";
    document.getElementById("videoT").style.display = "none";
	
    github = document.getElementById("git");
    github.href = "https://github.com/xuanyi35/MvcMovie1" ;
    document.getElementById("web").href = "https://xuanyi-movie.gear.host/"; 	
	
}
else if (url.includes("Mobile")){
    board.style.display = "none";
    demo.style.display = "block";
    
    Pname = document.getElementById("Pname");
    Pname.innerText = "HabitStation";
    subname = document.getElementById("subname");
    subname.innerText = "University of Alberta - Android App Group Project";
    
    description = document.getElementById("desc");
    description.innerHTML = ' CMPUT 301 course project. <br/> This App is used to track your Habits. <br/><br/> Features: <br/><br/> 1. Add/Edit/Delete a Habit<br/> 2. Add/Edit/Delete a Event<br/> 3. Ckeck Schedule <BR/> 4. Add Friends<br/> 5. View Events Map <br/> 6. Wait for you to Explore More!';
    
    ui = document.getElementById("ui");
    ui. src = "../img/Habit-station.png";
    ui.onclick = function () {
		window.open("../img/Habit-station.png");
    } 
     
    var link = "https://www.youtube.com/embed/LeQVUgIUshQ";
    video = document.getElementById("video");
    video. src = link;
    
    github = document.getElementById("git");
    github.href = "https://github.com/CMPUT301F17T24/habits_station/wiki" ;
    document.getElementById("web").style.display = "none";
}
else{
     board.style.display = "block";
     demo.style.display = "none";
}
