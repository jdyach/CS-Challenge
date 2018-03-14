var CurrentColor = "",
	changeColor = "",
	red = "rgba(199,16,56,1.00)",
	green = "rgba(23,201,104,1.00)",
	blue = "rgba(26,136,215,1.00)",
	divWidth = $('.box').width(); 

$(document).ready(function(){
    $('.box').height(divWidth);
});

$(".changer").click(function () {
	CurrentColor = $(this).val();
	if (CurrentColor === "red"){
		changeColor = red;
	}else if (CurrentColor === "green"){
		changeColor = green;
	}else {
		changeColor = blue;
	}
	document.documentElement.style.setProperty('--color', changeColor);
    $(".changer").parent().addClass("newColor"); 
});

$(".reset").click(function (){
    $(".box").removeClass("newColor");
});

$(window).resize(function(){
     $('.box').each(function() {
        $(this).height($(this).width());
    });
});