var myNotes = {
	       "../img/pictures/banff-0.jpg": "Banff - Lake Louise in November, shocked by its beauty " , 
	       "../img/pictures/banff-3.jpg": "Ice Fields  - lies between Banff National Park and Jasper National Park" ,
	       "../img/pictures/banff-1.jpg": "Fairmont Banff Springs - Luxury hotal in Banff, this is the view outside the window", 
	       "../img/pictures/banff-2.jpg": "Interesting shops in Banff Town",
	       "../img/pictures/banff-4.jpg": "Decoration in Cross Iron Mall",
	       "../img/pictures/van-0.jpg": "Jump Jump Jump @ Dinosaur Provincial Park" , 
	       "../img/pictures/van-1.jpg": "View of Dinosaur Provincial Park " ,
	       "../img/pictures/van-2.jpg": "Emerald Lake - Go Boating!", 
	       "../img/pictures/van-3.jpg": "Waterton Park - May advanture, go hiking !",
	       "../img/pictures/van-4.jpg": "See the beautiful water in Waterton Park ",
	       "../img/pictures/yellow-0.jpg":  "Aurora @Yellowknife",
	       "../img/pictures/yellow-1.jpg":  "Yellowknife Old Town Glassworks - You can design your own glasses / Bottles / Mugs.",
	       "../img/pictures/yellow-2.jpg":  "Welcome Tags @Yellowknife visit center",
	       "../img/pictures/yellow-3.jpg":  "Try Dog Sled for the first time!",
	       "../img/pictures/yellow-4.jpg":  "Walk on Ice Roads - so cool !",
		 "../img/pictures/mexico-0.jpg": "Cancun - Chichen Itza, built by the Maya people of the Terminal Classic period.",
		 "../img/pictures/mexico-1.jpg": "Ik Kil cenote - There is a long line to experience jumpping into the lake",
		 "../img/pictures/mexico-2.jpg": "Beach near the Resort ",
		 "../img/pictures/mexico-3.jpg": "Cancun - Coco Bongo, Located in the heart of the Hotel Zone ",
		 "../img/pictures/mexico-4.jpg": "Xplor - Drive amphibious vehicles in the Mayan jungle",
		 "../img/pictures/mexico-5.jpg": "Xplor - Ziplines, fly across jungle at high speed ",
		 "../img/pictures/mexico-6.jpg": "Stayin in Hotel, Lying on the beach and enjoy different drinks " ,
		 "../img/pictures/mexico-7.jpg": "Xcaret - night show, know about the history of Mayan", 
		 "../img/pictures/mexico-8.jpg": "Xcaret - Ocean anmials",
		 "../img/pictures/mexico-9.jpg": "Xcaret - Land anmials",
		 "../img/pictures/mexico-10.jpg": "Xcaret - Exhibitions info Board",
		"../img/pictures/dru-0.jpg": "Drumheller - Huge Dinasour @Drumheller visit center",
		"../img/pictures/dru-1.jpg": "Royal Tyrrell Museum - Probabbly Tyrannosaurus? Huge guy LOL",
		"../img/pictures/dru-2.jpg": "Hoodoos Trail - Special Landscape at South Drumheller ",
		"../img/pictures/dru-3.jpg": "Royal Tyrrell Museum - another scaring dinasour",
		"../img/pictures/dru-4.jpg": "@Drumheller visit center - go upstairs to the mouth of the Huge dinasour ",
	"../img/pictures/calZoo-0.jpg": "Calgary Zoo - Lazy Panda",
	"../img/pictures/calZoo-1.jpg": "Calgary Zoo - Bamboo Man ? ",
	"../img/pictures/calZoo-2.jpg": "Calgary Zoo - Loney Bear",
	"../img/pictures/calZoo-3.jpg": "Calgary Zoo  - Sleepy Flamingo",
	"../img/pictures/calZoo-4.jpg": "Calgary Zoo  - stretching Wolf ",
	"../img/pictures/calZoo-5.jpg": "Calgary Zoo  - Lordly Peacock"

	      };


    function load_gallary(){
	url = window.location.href;
	document.getElementById("icons").style.display = "none";
   	if (url.includes("&go=Drumheller")){
		show_pic("../img/pictures/dru-",5);

	}
     	else if (url.includes("&go=CalgaryZoo")){
		show_pic("../img/pictures/calZoo-",6);
	}
	else if (url.includes("&go=Mexico")){
		show_pic("../img/pictures/mexico-",11);
	}
	else if (url.includes("&go=Yellowknife")){
		show_pic("../img/pictures/yellow-",5);
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
	


