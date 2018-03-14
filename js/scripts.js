var currentColor = "",
	changeColor = "",
	divWidth = $('.box').width(); 

$(document).ready(function(){
    $('.box').height(divWidth);
});

$(".changer").click(function () {
	currentColor = $(this).val();
	if (currentColor === "red"){
		changeColor = "rgba(199,16,56,1.00)";
	}else if (currentColor === "green"){
		changeColor = "rgba(23,201,104,1.00)";
	}else {
		changeColor = "rgba(26,136,215,1.00)";
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