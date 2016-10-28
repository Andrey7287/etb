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
	var tablet = window.matchMedia( "(min-width: 768px) and (max-width: 991px)" );

	function adaptive () {

		var slider = $('.team-slider').hasClass('slick-initialized');

		if ( viewPort.matches ){
			//full menu
			$('.site-nav__item').hover(openMenu, closeMenu);
			//unbind slider
			if (slider) {
				$('.team-slider').slick('unslick');
			}
			//partners
			alignPartners ();
			//align patents
			if ( $('.patent').length ) {
				$('.head-link').ravno();
				var imgHeight = $('.patent__img').first().outerHeight();
				$('.patent__txt').outerHeight(imgHeight);
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
			};
		}
	};

	function alignNewsTitles () {

		if ( tablet.matches && $('.announce .head-link').length ){
			$('.announce .head-link').ravno();
		};

	};

	alignNewsTitles();
	adaptive();
	$(window).resize(adaptive);
	$(window).resize(alignNewsTitles);

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

	//press footer
	(function pressFooter(){
		$('.content').height('auto');
		//bitrix panel
		var adminHeight = $('#bx-panel').length ? $('#bx-panel').outerHeight(true) : 0;

		var viewportHeight = $(window).outerHeight(true);

		var headerHeight = $('header').outerHeight(true);
		var contentHeight = $('.content').outerHeight(true);
		var footerHeight = $('footer').outerHeight(true);

		var contentHeight = headerHeight + contentHeight + footerHeight + adminHeight;


		if ( (viewportHeight - contentHeight) > 0 ) {
			contentHeight = viewportHeight - ( headerHeight + footerHeight + adminHeight);
			$('.content').height(contentHeight+"px");
		}

	})();

	//Align partners block
	function alignPartners (){
		var $partner = $('.partner');
		if ( $partner.length ) {
			console.log('!');
			$partner.each(function(){
				//console.log(this);
				var $txt = $(this).find('.partner__outer');
				var $img = $(this).find('.partner__img');
				$txt.add($img).ravno();
			});
		}
	};


})($);
/*MY SCRIPTS END*/
