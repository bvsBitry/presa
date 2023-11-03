'use strict';
$(window).on('load', function () {
	setTimeout(function () {
		$('body').addClass('loaded');
	}, 400);
});
$(document).ready(function () {
	function goToSlide(slide) {
		// var sl = slide.substring(1, 2);
		// window.location = `index-${sl}.html`;
		com.veeva.clm.gotoSlide(slide);
	}

	// main menu
	$('#menu1').click(function () {
		goToSlide('S1_UA_ADV_Decros_2023.zip');
	});
	$('#menu2').click(function () {
		goToSlide('S2_UA_ADV_Decros_2023.zip');
	});
	$('#menu3').click(function () {
		goToSlide('S3_UA_ADV_Decros_2023.zip');
	});
	$('#menu4').click(function () {
		goToSlide('S4_UA_ADV_Decros_2023.zip');
	});
	$('#menu5').click(function () {
		goToSlide('S5_UA_ADV_Decros_2023.zip');
	});
	$('#menu6').click(function () {
		goToSlide('S6_UA_ADV_Decros_2023.zip');
	});
	$('#menu7').click(function () {
		goToSlide('S7_UA_ADV_Decros_2023.zip');
	});

	//slide1
	$('.slide-3 .section-5 .btn-pl').click(function () {
		$('.slide-3-a').fadeIn(500);
		setTimeout(() => {
			const element1 = document.querySelector('.slide-3-a .section-2');
			element1.classList.add('animate__animated', 'animate__fadeInLeft');
		}, 1000)
		setTimeout(() => {
			const element2 = document.querySelector('.slide-3-a .section-3');
			element2.classList.add('animate__animated', 'animate__fadeInLeft');
		}, 2000)
		setTimeout(() => {
			const element3 = document.querySelector('.slide-3-a .section-4');
			element3.classList.add('animate__animated', 'animate__fadeInLeft');
		}, 3000)

		return false;
	});
	$('.slide-3-a .btn-min').click(function () {
		$('.slide-3-a').fadeOut(500);
		const element1 = document.querySelector('.slide-3-a .section-2');
		element1.classList.remove('animate__animated', 'animate__fadeInLeft');
		const element2 = document.querySelector('.slide-3-a .section-3');
		element2.classList.remove('animate__animated', 'animate__fadeInLeft');
		const element3 = document.querySelector('.slide-3-a .section-4');
		element3.classList.remove('animate__animated', 'animate__fadeInLeft');
		return false;
	});

	$('.slide-3 .section-4 .btn-pl').click(function () {
		$('.slide-3-b').fadeIn(500);
		return false;
	});
	$('.slide-3-b .btn-min').click(function () {
		$('.slide-3-b').fadeOut(500);
		return false;
	});
	$('.slide-4 .section-btn-1').click(function () {
		$('.slide-4-a').fadeIn(500);
		setTimeout(() => {
			const element = document.querySelector('.slide-4-a .section-item-1 .section-title');
			element.classList.add('animate__animated', 'animate__fadeIn');
		}, 1000)
		setTimeout(() => {
			const element = document.querySelector('.slide-4-a .section-item-1 .section-subtitle');
			element.classList.add('animate__animated', 'animate__fadeIn');
		}, 1500)
		setTimeout(() => {
			const element = document.querySelector('.slide-4-a .section-item-1 .section-graph');
			element.classList.add('animate__animated', 'animate__fadeIn');
		}, 2000)
		setTimeout(() => {
			const element = document.querySelector('.slide-4-a .section-item-2 .section-title');
			element.classList.add('animate__animated', 'animate__fadeIn');
		}, 4000)
		setTimeout(() => {
			const element = document.querySelector('.slide-4-a .section-item-2 .section-subtitle');
			element.classList.add('animate__animated', 'animate__fadeIn');
		}, 4500)
		setTimeout(() => {
			const element = document.querySelector('.slide-4-a .section-item-2 .section-graph');
			element.classList.add('animate__animated', 'animate__fadeIn');
		}, 5000)

		return false;
	});

	$('.slide-4-a .btn-min').click(function () {
		$('.slide-4-a').fadeOut(500);
		const element1 = document.querySelector('.slide-4-a .section-item-1 .section-title');
		element1.classList.remove('animate__animated', 'animate__fadeIn');
		const element2 = document.querySelector('.slide-4-a .section-item-1 .section-subtitle');
		element2.classList.remove('animate__animated', 'animate__fadeIn');
		const element3 = document.querySelector('.slide-4-a .section-item-1 .section-graph');
		element3.classList.remove('animate__animated', 'animate__fadeIn');
		const element4 = document.querySelector('.slide-4-a .section-item-2 .section-title');
		element4.classList.remove('animate__animated', 'animate__fadeIn');
		const element5 = document.querySelector('.slide-4-a .section-item-2 .section-subtitle');
		element5.classList.remove('animate__animated', 'animate__fadeIn');
		const element6 = document.querySelector('.slide-4-a .section-item-2 .section-graph');
		element6.classList.remove('animate__animated', 'animate__fadeIn');
		return false;
	});

	$('.slide-4 .section-btn-2').click(function () {
		$('.slide-4-b').fadeIn(500);
		setTimeout(() => {
			const element = document.querySelector('.slide-4-b .section-item-1 .section-title');
			element.classList.add('animate__animated', 'animate__fadeIn');
		}, 1000)
		setTimeout(() => {
			const element = document.querySelector('.slide-4-b .section-item-1 .section-subtitle');
			element.classList.add('animate__animated', 'animate__fadeIn');
		}, 1500)
		setTimeout(() => {
			const element = document.querySelector('.slide-4-b .section-item-1 .section-graph');
			element.classList.add('animate__animated', 'animate__fadeIn');
		}, 2000)
		setTimeout(() => {
			const element = document.querySelector('.slide-4-b .section-item-2 .section-title');
			element.classList.add('animate__animated', 'animate__fadeIn');
		}, 4000)
		setTimeout(() => {
			const element = document.querySelector('.slide-4-b .section-item-2 .section-subtitle');
			element.classList.add('animate__animated', 'animate__fadeIn');
		}, 4500)
		setTimeout(() => {
			const element = document.querySelector('.slide-4-b .section-item-2 .section-graph');
			element.classList.add('animate__animated', 'animate__fadeIn');
		}, 5000)

		return false;
	});

	$('.slide-4-b .btn-min').click(function () {
		$('.slide-4-b').fadeOut(500);
		const element1 = document.querySelector('.slide-4-b .section-item-1 .section-title');
		element1.classList.remove('animate__animated', 'animate__fadeIn');
		const element2 = document.querySelector('.slide-4-b .section-item-1 .section-subtitle');
		element2.classList.remove('animate__animated', 'animate__fadeIn');
		const element3 = document.querySelector('.slide-4-b .section-item-1 .section-graph');
		element3.classList.remove('animate__animated', 'animate__fadeIn');
		const element4 = document.querySelector('.slide-4-b .section-item-2 .section-title');
		element4.classList.remove('animate__animated', 'animate__fadeIn');
		const element5 = document.querySelector('.slide-4-b .section-item-2 .section-subtitle');
		element5.classList.remove('animate__animated', 'animate__fadeIn');
		const element6 = document.querySelector('.slide-4-b .section-item-2 .section-graph');
		element6.classList.remove('animate__animated', 'animate__fadeIn');
		return false;
	});
	$('.slide-4 .section-btn-3').click(function () {
		$('.slide-4-c').fadeIn(500);
		setTimeout(() => {
			const element1 = document.querySelector('.slide-4-c .section-item-1 .section-img');
			element1.classList.add('animate__animated', 'animate__fadeIn');
			const element2 = document.querySelector('.slide-4-c .section-item-1 .section-title');
			element2.classList.add('animate__animated', 'animate__fadeIn');
		}, 1000)
		setTimeout(() => {
			const element3 = document.querySelector('.slide-4-c .section-item-1 .section-line');
			element3.classList.add('animate__animated', 'animate__fadeInDownBig');
		}, 1500)
		setTimeout(() => {
			const element4 = document.querySelector('.slide-4-c .section-item-1 .section-desc');
			element4.classList.add('animate__animated', 'animate__fadeIn');
		}, 2000)
		setTimeout(() => {
			const element5 = document.querySelector('.slide-4-c .section-item-2 .section-img');
			element5.classList.add('animate__animated', 'animate__fadeIn');
			const element6 = document.querySelector('.slide-4-c .section-item-2 .section-title');
			element6.classList.add('animate__animated', 'animate__fadeIn');
		}, 4000)
		setTimeout(() => {
			const element7 = document.querySelector('.slide-4-c .section-item-2 .section-line');
			element7.classList.add('animate__animated', 'animate__fadeInDownBig');
		}, 4500)
		setTimeout(() => {
			const element8 = document.querySelector('.slide-4-c .section-item-2 .section-desc');
			element8.classList.add('animate__animated', 'animate__fadeIn');
		}, 5000)
		setTimeout(() => {
			const element9 = document.querySelector('.slide-4-c .section-item-3 .section-img');
			element9.classList.add('animate__animated', 'animate__fadeIn');
			const element10 = document.querySelector('.slide-4-c .section-item-3 .section-title');
			element10.classList.add('animate__animated', 'animate__fadeIn');
		}, 7000)
		setTimeout(() => {
			const element11 = document.querySelector('.slide-4-c .section-item-3 .section-line');
			element11.classList.add('animate__animated', 'animate__fadeInDownBig');
		}, 7500)
		setTimeout(() => {
			const element12 = document.querySelector('.slide-4-c .section-item-3 .section-desc');
			element12.classList.add('animate__animated', 'animate__fadeIn');
		}, 8000)


		return false;
	});

	$('.slide-4-c .btn-min').click(function () {
		$('.slide-4-c').fadeOut(500);
		const element1 = document.querySelector('.slide-4-c .section-item-1 .section-img');
		element1.classList.remove('animate__animated', 'animate__fadeIn');
		const element2 = document.querySelector('.slide-4-c .section-item-1 .section-title');
		element2.classList.remove('animate__animated', 'animate__fadeIn');
		const element3 = document.querySelector('.slide-4-c .section-item-1 .section-line');
		element3.classList.remove('animate__animated', 'animate__fadeInDownBig');
		const element4 = document.querySelector('.slide-4-c .section-item-1 .section-desc');
		element4.classList.remove('animate__animated', 'animate__fadeIn');
		const element5 = document.querySelector('.slide-4-c .section-item-2 .section-img');
		element5.classList.remove('animate__animated', 'animate__fadeIn');
		const element6 = document.querySelector('.slide-4-c .section-item-2 .section-title');
		element6.classList.remove('animate__animated', 'animate__fadeIn');
		const element7 = document.querySelector('.slide-4-c .section-item-2 .section-line');
		element7.classList.remove('animate__animated', 'animate__fadeInDownBig');
		const element8 = document.querySelector('.slide-4-c .section-item-2 .section-desc');
		element8.classList.remove('animate__animated', 'animate__fadeIn');
		const element9 = document.querySelector('.slide-4-c .section-item-3 .section-img');
		element9.classList.remove('animate__animated', 'animate__fadeIn');
		const element10 = document.querySelector('.slide-4-c .section-item-3 .section-title');
		element10.classList.remove('animate__animated', 'animate__fadeIn');
		const element11 = document.querySelector('.slide-4-c .section-item-3 .section-line');
		element11.classList.remove('animate__animated', 'animate__fadeInDownBig');
		const element12 = document.querySelector('.slide-4-c .section-item-3 .section-desc');
		element12.classList.remove('animate__animated', 'animate__fadeIn');
		return false;
	});

	$('.slide-4 .section-btn-4').click(function () {
		$('.slide-4-d').fadeIn(500);
		return false;
	});

	$('.slide-4-d .btn-min').click(function () {
		$('.slide-4-d').fadeOut(500);
		return false;
	});
	$('.slide-1 .btn-pl').on('click', function(){
		const container = $(this).closest('.section-block-content-replacer');
		const footnote = container.data('footnote')
		container.addClass('active');
		$(`#${footnote}`).show();
	})
	$('.slide-1 .btn-min').on('click', function(){
		const container = $(this).closest('.section-block-content-replacer');
		const footnote = container.data('footnote')
		container.removeClass('active');
		$(`#${footnote}`).hide();
	})

	$('.slide-5 .arrow-right').on('click', function(){
		$('.slide-5-a').fadeIn(500);

		setTimeout(() => {
			outNum('num2');
		}, 1000)
		setTimeout(() => {
			outNum('num3');
		}, 1000)
		setTimeout(() => {
			outNum('num4');
		}, 1000)
		setTimeout(() => {
			const element1 = document.querySelector('.slide-5-a .section-item-2');
			element1.classList.add('animate__animated', 'animate__fadeIn');
		}, 6500)
		return false;
	})
	$('.slide-5-a .btn-min').click(function () {
		$('.slide-5-a').fadeOut(500);
		const element1 = document.querySelector('.slide-5-a .section-item-2');
		element1.classList.remove('animate__animated', 'animate__fadeIn');

		return false;
	});


	//slide 6
	var currentSlide = 0;

	$('#prevButton').click(function () {
		$(this).addClass('pointer');
		currentSlide--;
		console.log(currentSlide);
		if (currentSlide === 0) {
			$(this).addClass('disabled');
		}
		$('.carusel__container').css('left', '+=1080');
		$('#nextButton').removeClass('disabled');
		setTimeout(() => {
			$(this).removeClass('pointer');
		}, 1000);
		return false;
	});
	$('#nextButton').click(function () {
		$(this).addClass('pointer');
		currentSlide++;
		if (currentSlide === 3) {
			$(this).addClass('disabled');
		}
		$('#prevButton').removeClass('disabled');
		$('.carusel__container').css('left', '-=1080');
		setTimeout(() => {
			$(this).removeClass('pointer');
		}, 1000);
		return false;
	});

	// range
	var ua = window.navigator.userAgent;
	var isIE = /MSIE|Trident/.test(ua);
	var eventType = isIE ? 'change' : 'input';
	Array.prototype.slice.call(document.querySelectorAll('.slider__input')).forEach(function (element) {
		element.addEventListener(
			eventType,
			function (e) {
				element.style.setProperty('--val', element.value);
			},
			false
		);
	});

	function outNum(id) {
		let speed = 30;
		function incEltNbr(id) {
			let elt = document.getElementById(id);
			if(!elt) return;
			let endNbr = Number(jQuery(`#${id}`).data('num'));
			incNbrRec(0, endNbr, elt);
		}

		function incNbrRec(i, endNbr, elt) {
			if (i <= endNbr) {
				elt.innerHTML = i;
				setTimeout(function() {//Delay a bit before calling the function again.
					incNbrRec(i + 1, endNbr, elt);
				}, speed);
			}
		}

		incEltNbr(id);
	}

	setTimeout(() => {
		outNum('num1');
	}, 1600)
});
