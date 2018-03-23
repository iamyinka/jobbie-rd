jQuery(document).ready(function($) {
	var  mn = $(".navbar");
	var  mns = "sticky-top";
	var  hdr = $('#header').height(); 

	$(window).scroll(function() {
	  if( $(this).scrollTop() > (hdr+2) ) {
	    mn.addClass(mns);
	  } else {
	    mn.removeClass(mns);
	  }
	});
});