var myNotes = {
	       "../img/pictures/banff-0.jpg": "Banff - Lake Louise in November, shocked by its beauty " , 
	       "../img/pictures/banff-3.jpg": "Ice Fields  - lies between Banff National Park and Jasper National Park" ,
	       "../img/pictures/banff-1.jpg": "Fairmont Banff Springs - Luxury hotal in Banff, this is the view outside the window", 
	       "../img/pictures/banff-2.jpg": "Interesting shops in Banff Town",
	       "../img/pictures/banff-4.jpg": "Decoration in Cross Iron Mall",
	       "../img/pictures/van-0.jpg": "Jump Jump Jump @ Dinosaur Provincial Park" , 
	       "../img/pictures/van-1.jpg": "View of Dinosaur Provincial Park " ,
	       "../img/pictures/van-2.jpg": "Emerald Lake - Go Boating!", 
	       "../img/pictures/van-3.jpg": "Waterton Park - beginning of May advanture",
	       "../img/pictures/van-4.jpg": "See the beautiful in Waterton Park "

	      };


    function load_gallary(){
	url = window.location.href;
	document.getElementById("icons").style.display = "none";
   	if (url.includes("&go=Drumheller")){
		show_pic("",5);

	}
     	else if (url.includes("&go=CalgaryZoo")){
		show_pic("",5);
	}
	else if (url.includes("&go=Mexico")){
		show_pic("",5);
	}
	else if (url.includes("&go=Yellowknife")){
		show_pic("",5);
	}
	else if (url.includes("&go=VanTrip")){
		show_pic("../img/pictures/van-",5);
	}
	else if (url.includes("&go=Banff")){
		show_pic("../img/pictures/banff-",5);
	}
	else{
	  	document.getElementById("icons").style.display = "block";
	}
    }


    function show_pic(pre, len){
	var i = 0;
	var body = document.getElementById("bd");
	var up = Math.ceil(len/3);

        while (i<len){
	    var res = document.createElement("DIV");
	    res.setAttribute("class","responsive");
	    body.appendChild(res);
	    for (i; i<up; i++){
		if (i >= len){
		  break;
		}
		var path = pre+ i.toString() + ".jpg";
		/*var path = "../img/Noimg.jpg";*/
		var note = myNotes[path];
		add_pic(res,path,note)
	    }
	    i = up;
	    up = up + Math.ceil(len/3);
	}
   }

    function add_pic(res,path, noteText){
		var gallary = document.createElement("DIV");
		gallary.setAttribute("class","gallery");
		res.appendChild(gallary);
		var image = document.createElement("IMG");	
		image.src = path;
		var note = document.createElement("p");	
		note.innerHTML= noteText.substring(0, 50)+"...";
		gallary.appendChild(image);
		gallary.appendChild(note);
		gallary.onclick = function () {
		    var modal= document.getElementById("myModal");
		    modal.style.display = "block";
		    document.getElementById("modal_img").src = path;
 		    document.getElementById("more_info").innerText = noteText;
		}

		
    }
	


