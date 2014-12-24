
$(document).ready(function() {
	$hidden = false;
	$("#radiotitle").click(function() {
		if ($hidden == true) {
		$("#formCont").velocity("slideDown", { duration: 200, easing: [0,1.15,1,1]} );
		$("#radiotitle").html("- Lead Type");
		$hidden = false;
	} else {
		$("#formCont").velocity("slideUp", { duration: 200, easing: [0,1.15,1,1]} );
		$("#radiotitle").html("+ Lead Type");
		$hidden = true;
	}
	});

	$windowHide = true;
	$("#button2").click(function() {
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



