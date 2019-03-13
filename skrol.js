var div = document.querySelector(".right");
	 var sadrzaj = document.querySelector("#un");
	 var clientDivHeight = parseInt(div.clientHeight);
	 var scrollDivHeight = parseInt(div.scrollHeight);
	 var maxHscr = parseInt(0.9* clientDivHeight);
	 var scroll = document.createElement("div");
	 var minScrollTop = 0.05*clientDivHeight;
	 scroll.classList.add("nasScroll");


	 var hs;
	 if ( scrollDivHeight > clientDivHeight )
	 	hs = parseInt((clientDivHeight*maxHscr)/scrollDivHeight);
	else
		hs = maxHscr;
		scroll.style.height = hs + "px";
		div.appendChild(scroll);

		div.addEventListener("wheel", function(event){
			event.stopPropagation();
			event.preventDefault();
			var tt = sadrzaj.offsetTop;
			var st = scroll.offsetTop;

			if ( event.deltaY > 0 ){
				tt -= 30; 
			}else{
				tt += 30;
			}
			if ( tt > 0 ) 
			    tt = 0;

			if ( tt < -(scrollDivHeight-clientDivHeight))
				 tt = -(scrollDivHeight-clientDivHeight);

				 st = parseInt(-(tt*maxHscr)/scrollDivHeight + minScrollTop);

			sadrzaj.style.top = tt + "px";
			scroll.style.top = st + "px";


		});
		var pocDrag = -1;
		var pocScroll;
		
	    var maxScrollTop = 0.95*clientDivHeight - hs;
		scroll.addEventListener("mousedown", function(event){
			console.log(event.clientY);
			pocDrag = event.clientY;
			pocScroll = scroll.offsetTop;
			sadrzaj.style.userSelect = "none";
		});
		window.addEventListener("mousemove", function(event){

			if(pocDrag<0) return;
			console.log(event.clientY);
			var raz= event.clientY - pocDrag;
			var st = (pocScroll + raz);
			if ( st < minScrollTop ) st = minScrollTop;
			if( st > maxScrollTop ) st = maxScrollTop;
			var tt = -parseInt(((st -minScrollTop)* scrollDivHeight)/maxHscr);
			sadrzaj.style.top = tt + "px";
			scroll.style.top = st + "px";

		});
		window.addEventListener("mouseup", function(event){

			pocDrag = -1;
			sadrzaj.style.userSelect = "";

		});