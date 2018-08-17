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
}
else{
     board.style.display = "block";
     demo.style.display = "none";
}
