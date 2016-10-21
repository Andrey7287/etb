/*MY SCRIPTS START*/
(function(){

	$.fn.ravno = function () {
		var maxH = -1;
		var $cols = $(this).height("auto").each(function () {
			var h = $(this).height();
			maxH = (h > maxH) ? h : maxH;
		});
		$cols.height(maxH);
	};
	$('.patent').ravno();
	$('.partner__txt').ravno();

	$('.slider').slick({
		prevArrow: $('.left'),
		nextArrow: $('.right')
	});
	$('.slider-bottom').slick({
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		slidesToShow: 4
	});
	function openMenu(e){
		var $dropdown = $(this).find('.dropdown');
		if ( $dropdown.length ) {
			$dropdown.removeClass('dropdown__closed');
			$dropdown.addClass('dropdown__open');

		}
	};
	function closeMenu(e){
		var $dropdown = $(this).find('.dropdown');
		if ( $dropdown.length ) {
			$dropdown.removeClass('dropdown__open');
			$dropdown.addClass('dropdown__closed');

		}
	};

	$('.site-nav__item').hover(openMenu, closeMenu);
	$('.dropdowm').hover();



})($);
/*MY SCRIPTS END*/
