var myNotes = { "0.jpg": "first" , "1.jpg": "second" , "2.jpg":"third", "4.jpg":"4th, nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu",  "3.jpg":"nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn" };


    function load_gallary(){
	// url ........
    //	if (....) {
		
	show_pic("",5);

	//}
     //	else if (){

	//}

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
		note.innerHTML= noteText.substring(0, 100);
		gallary.appendChild(image);
		gallary.appendChild(note);
		gallary.onclick = function () {
		    var modal= document.getElementById("myModal");
		    modal.style.display = "block";
		    document.getElementById("modal_img").src = path;
 		    document.getElementById("more_info").innerText = noteText;
		}

		
    }
	

