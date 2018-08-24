url = window.location.href;
board = document.getElementById("board");
demo = document.getElementById("demo");

if  (url.includes("Website")){
     board.style.display = "none";
     demo.style.display = "block";
}
else if (url.includes("Mobile")){
    board.style.display = "none";
    demo.style.display = "block";
    
    Pname = document.getElementById("Pname");
    Pname.innerText = "HabitStation";
    subname = document.getElementById("subname");
    subname.innerText = "University of Alberta - Android App Group Project";
    
    description = document.getElementById("desc");
    description.innerHTML = ' CMPUT 301 course project. <br/> This App is used to track your Habits. Features: <br/><br/> 1. Add/Edit/Delete a Habit<br/> 2. Add/Edit/Delete a Event<br/> 3. Ckeck Schedule <BR/> 4. Add Friends<br/> 5. View Events Map <br/> 6. Wait for you to Explore More!';
    
    ui = document.getElementById("ui");
    ui. src = "../img/Habit-station.png";
     
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
