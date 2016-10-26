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
		nextArrow: $('.right'),
		responsive: [{
			breakpoint: 768,
			settings: {
				arrows: false
			}
		}]
	});
	$('.slider-bottom').slick({
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		slidesToShow: 4,
		responsive: [{

			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}

		}]
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
	function toggleMenu(e){
		e.preventDefault();
		$('.site-nav__item').removeClass('site-nav__item--act');
		$(this).parent().addClass('site-nav__item--act');
		$(this).parent().siblings().find('ul').stop().hide('slow');
		$(this).next().stop().toggle('slow');
	};

	var viewPort = window.matchMedia( "(min-width: 768px)" );

	function adaptive () {

		var slider = $('.team-slider').hasClass('slick-initialized');

		if ( viewPort.matches ){
			//full menu
			$('.site-nav__item').hover(openMenu, closeMenu);
			//unbind slider
			if (slider) {
				$('.team-slider').slick('unslick');
			}

		} else {
			// small screen menu
			$('.site-nav__item').unbind();
			$('.site-nav').on('click', '.site-nav__link', toggleMenu);
			// make team slider
			if ( !slider ) {
				$('.team-slider').slick({
					prevArrow: $('.left-person'),
					nextArrow: $('.right-person')
				});
			}
		}
	};
	adaptive();
	$(window).resize(adaptive);

	/*footer icons*/
	$('.soc').on('mousedown', '.soc__item', function(){
		$(this).addClass('soc__item--mousedown');
	});
	$('.soc').on('mouseup', '.soc__item', function(){
		$(this).removeClass('soc__item--mousedown');
	});

	/*mobile menu*/
	$('#toggleBurger').click(function(e){
		e.preventDefault();
		$('.site-nav').toggle('slow');
	});

})($);
/*MY SCRIPTS END*/
