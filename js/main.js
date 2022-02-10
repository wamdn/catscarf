"use strict";

$('.parallax-1').parallax({imageSrc: 'img/img_homepage_divider.jpg'});
$('.parallax-2').parallax({imageSrc: 'img/img_homepage_footer.jpg'});

//Menu

var menuHeight = $(".menu").height();
var $menu = $(".menu");
var $catBtn = $(".cat-btn");

var boolean = false;

if (window.matchMedia("(min-width: 1024px)").matches) {
	/* console.log(menuHeight); */
	$(window).scroll(function() {

		if ($(this).scrollTop() >= $(".collection").offset().top) {
			$menu.css("margin-top","0");
			$menu.addClass('active');
			$(".back-to-top ,.cat-btn").click(function() {
				$("html, body").stop().animate({
					scrollTop: 0
				}, 700);
				return false;
			});
		}
		else if ($(this).scrollTop() < 20) {
			$menu.css("margin-top","0");
			$menu.removeClass('active');
		}
		else{
			$menu.css("margin-top","-"+(menuHeight+20)+"px");
		}
	});
}
else{
	$(".cat-btn").click(function(){
		if(boolean === false){
			$menu.css("margin-top","0");

			boolean = true;
		} else {
			$menu.css("margin-top","-"+menuHeight+"px");

			boolean = false;
		}
	});
}

//Scrolling

$(".menu>div>a").click(function() {
	var id = $(this).attr("href");
	var idOffsetTop = $(id).offset().top
	$("html, body").stop().animate({
		scrollTop: idOffsetTop
	}, 700);
	return false;
});

//Change gif to animeted gif
var imgSrc;

$(".spec img").hover(function() {
	imgSrc = $(this).attr("src");
	var gifSlice = imgSrc.slice(0, imgSrc.length-4);
	$(this).attr("src", gifSlice+"_anim.gif");

}, function(){
	$(this).attr("src", imgSrc);
});
