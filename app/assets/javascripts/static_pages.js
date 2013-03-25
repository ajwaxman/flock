$(document).ready(function(){

	//when page loads
	$(window).load(function(){
		//change section height to height of window
		var height = $(window).height();
		$(".section_background").height((height)+"px");
		$(".section_background_2").height((height-55)+"px");
	});
	
	// when window us resizes
	$(window).resize(function(){
		//change section height to height of window
		var height = $(window).height();
		$(".section_background").height((height)+"px");
		$(".section_background_2").height((height-55)+"px");
	});

	jQuery(function () {

	  // $("#next").click(scrollToNew);

	  $(document).keydown(function (evt) {

	    
	  if(window.location.pathname=="/about"){
	    if (evt.keyCode == 78) { // n
	      // evt.preventDefault(); // prevents the usual scrolling behaviour
	      // scrollToNew(); // scroll to the next new heading instead
	      var height = $(window).height();
	      var scrollTop = $(window).scrollTop();
	      console.log("ScrollTop: " + scrollTop)
	      console.log("Height * 1: " + (height *1 -55))
		  console.log("Height * 2: " + (height *2 -55))
		  console.log("Height * 3: " + (height *3 -55))
		  console.log("Height * 4: " + (height *4- 55))
	//       alert(scrollTop)
	//       alert(height)
	      	if 		(scrollTop < height-55) {
				$('html, body').animate({scrollTop : (height-55)},800);
				console.log("js 1")
				return false;
		   } 
		   	else if (scrollTop < height*2-110) {
		   		$('html, body').animate({scrollTop : (height*2-(55*2))},800);
		   		console.log("js 2")
				return false;
		   }
		   	else if (scrollTop < height*3-165) {
		   		$('html, body').animate({scrollTop : (height*3-(55*3))},800);
		   		console.log("js 3")
				return false;
		   } 

		   	else if (scrollTop < height*4-220) {
		   		$('html, body').animate({scrollTop : (height*4-(55*4))},800);
		   		console.log("js 4")
				return false;
		   }
		}
		    if (evt.keyCode == 85) { //
		    	$('html, body').animate({scrollTop : 0},800);
		    	return false;
			}
		}

	  });

	});


});