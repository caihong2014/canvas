$(function(){
	var gallery = $('.swiper-container').swiper({

		slidesPerView:'auto',
		watchActiveIndex: true,
		centeredSlides: true,
		// pagination:'.pagination',
		paginationClickable: true,
		resizeReInit: true,
		keyboardControl: true,
		grabCursor: true,
		onImagesReady: function(){
			changeSize()
		}
	})
	function changeSize() {
		//Unset Width
		$('.swiper-slide').css('height','')
		//Get Size
		var imgHeight = $('.swiper-slide img').height();
		if (imgHeight+40>$(window).height()) imgHeight = $(window).height()-40;
		//Set Width
		$('.swiper-slide').css('height', imgheight+40);
	}
	
	changeSize()

	//Smart resize
	$(window).resize(function(){
		changeSize()
		gallery.resizeFix(true)	
	})
})
