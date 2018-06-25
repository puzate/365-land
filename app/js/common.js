$(document).ready(function() {
	$('#js_slider_main').owlCarousel({
		items: 2,
		nav: true,
		dots: false,
		loop: true,
		navText: ['<i class="icon-keyboard_arrow_left"></i>', '<i class="icon-keyboard_arrow_right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			992: {
				items: 2
			},
		}
	});
	$(".start_scroll").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
  });
  $(".header_nav_menu_list").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
  });
  $('.header_button-xs .__btn').click(function() {
  	$($(this)).toggleClass('open')
  	$('.header_nav').toggleClass('open')
  });
});