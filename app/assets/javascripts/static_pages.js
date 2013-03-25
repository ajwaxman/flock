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

	function scrollToNew () {
	  scrollTop = $(window).scrollTop();
	  $('.new').each(function(i, h1){ // loop through article headings
	    h2top = $(h1).offset().top; // get article heading top
	    if (scrollTop < h1top) { // compare if document is below heading
	      $.scrollTo(h1, 800); // scroll to in .8 of a second
	      return false; // exit function
	    }
	  });
	}

	jQuery(function () {

	  $("#next").click(scrollToNew);

	  $(document).keydown(function (evt) {

	    if (evt.keyCode == 78) { // n
	      // evt.preventDefault(); // prevents the usual scrolling behaviour
	      // scrollToNew(); // scroll to the next new heading instead
	      var height = $(window).height();
	      var scrollTop = $(window).scrollTop();
	      // alert(scrollTop)
	      // alert(height)
	      if (scrollTop < height-55) {
				$('html, body').animate({scrollTop : (height)-55},800);
				return false;
		   } else if (scrollTop < height*2-55) {
		   	$('html, body').animate({scrollTop : (height*2)-55},800);
				return false;
		   } else if (scrollTop < height*3-55) {
		   	$('html, body').animate({scrollTop : (height*3)-55},800);
				return false;
		   }
		   else if (scrollTop < height*4-55) {
		   	$('html, body').animate({scrollTop : (height*4)-55},800);
				return false;
		   }
		     else if (scrollTop < height*5-55) {
		   	$('html, body').animate({scrollTop : (height*5)-55},800);
				return false;
		   }
	    }

	    if (evt.keyCode == 85) { //
	    	$('html, body').animate({scrollTop : 0},800);
	    	return false;
	    }
	  });

	});


});