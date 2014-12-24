$(document).ready(function() {
	/* Add a plus or minus symbol depending on whether radio buttons are displayed or hidden by default */
	$(".hidden").each(function() {
		var string = $(this).text();
		$(this).text("+ " + string);
	});

	$(".displayed").each(function() {
		var string = $(this).text();
		$(this).text("- " + string);
	});

	/* slide animation for elements displayed by default */
	$displayed = true;
	$(".displayed").click(function() {

		/* Make sure variable represents proper state */
		var element = $(this).next().css("display");

		if (element == "none") {
			$displayed = false
		} else if (element == "block") {
			$displayed = true
		};

		/* Change the plus or minus */
		var string = $(this).text();

		if (string.indexOf("+") == -1) {
			var split = string.split("- ")[1];
		} else if (string.indexOf("-") == -1) {
			var split = string.split("+ ")[1];
		};

		/* Slide animation */
		if ($displayed == false) {
			$(this).next().velocity("slideDown", { duration: 200, easing: [0,1.15,1,1]} );
			$(this).html("- " + split);
			$displayed = true;
		} else {
			$(this).next().velocity("slideUp", { duration: 200, easing: [0,1.15,1,1]} );
			$(this).html("+ " + split);
			$displayed = false;
		}
	});

	/* Slide animation for elements hidden by default */
	$hidden = true;
	$(".hidden").click(function() {

		/* Make sure variable represents proper state */
		var element = $(this).next().css("display");

		if (element == "block") {
			$hidden = false
		} else if (element == "none") {
			$hidden = true
		};

		var string = $(this).text();

		if (string.indexOf("+") == -1) {
			var split = string.split("- ")[1];
		} else if (string.indexOf("-") == -1) {
			var split = string.split("+ ")[1];
		};

		if ($hidden == true) {
			$(this).next().velocity("slideDown", { duration: 200, easing: [0,1.15,1,1]} );
			$(this).html("- " + split);
			$hidden = false;
		} else {
			$(this).next().velocity("slideUp", { duration: 200, easing: [0,1.15,1,1]} );
			$(this).html("+ " + split);
			$hidden = true;
		}
	});

	




















	$windowHide = true;
	$("#gridItem").click(function() {
		if ($windowHide == true) {
		$("#window").addClass("window");
		$("#close").addClass("display");
		$windowHide = false;
	} else {
		$("#window").removeClass("window");
		$("#close").removeClass("display");
		$windowHide = true;
	}
	});
var parent, ink, d, x, y;
$(".temp").mousedown(function(e){
	parent = $(this).parent();
	//create .ink element if it doesn't exist
	if(parent.find(".ink").length == 0)
		parent.append("<span class='ink'></span>");
		
	ink = parent.find(".ink");
	//incase of quick double clicks stop the previous animation
	ink.removeClass("animate");
	
	//set size of .ink
	if(!ink.height() && !ink.width())
	{
		//use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
		d = Math.max(parent.outerWidth(), parent.outerHeight());
		ink.css({height: d, width: d});
	}
	
	//get click coordinates
	//logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
	x = e.pageX - parent.offset().left - ink.width()/2;
	y = e.pageY - parent.offset().top - ink.height()/2;
	
	//set the position and add class .animate
	ink.css({top: y+'px', left: x+'px'}).addClass("animate");

	
})

});
