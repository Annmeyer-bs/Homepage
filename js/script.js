$(document).ready(function(){
	$('.slider-pl').slick({
		dots:true,
		slidesToShow: 4,
		slidesToScroll: 2,
		responsive: [
			{
			  breakpoint: 1030,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			  }
			},
			{
				breakpoint: 900,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 2
				}
			  },
			{
			  breakpoint: 670,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots:false,
			  }
			}
		  ],
		  appendArrows:$('.slider-pl'),
		  appendDots:$('.slider-pl'), 
	});
  });
  $(document).ready(function(){
	$('.slideyml').slick({
		dots:true,
		slidesToShow: 3,
		slidesToScroll: 2,

		responsive: [
			{
			  breakpoint: 900,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},
			{
			  breakpoint: 741,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				dots:false,
			  }
			},
			{
				breakpoint: 620,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  dots:false,
				}
			  }
		  ],
		  appendArrows:$('.slide__switch'),
		  appendDots:$('.slide__switch'),
	});
  });
  jQuery('.slider-pl').on('beforeChange', function(e, slick, currentSlide, nextSlide){
	jQuery(".container__product-landacape .slick-dots > li").removeClass('previous')  
	if (Math.abs(nextSlide - currentSlide) == 1) {
		direction = (nextSlide - currentSlide > 0) ? "left" : "right";
	  }
	  else {
		direction = (nextSlide - currentSlide > 0) ? "right" : "left";
	  }
	if(direction === "right"){
		if(nextSlide !== 2){
			jQuery(".container__product-landacape .slick-dots li:last-child").prev().addClass("previous")
		}else{
		 jQuery(".container__product-landacape .slick-dots .slick-active").addClass("previous");
		}
	}});
  jQuery('.slideyml').on('beforeChange', function(e, slick, currentSlide, nextSlide){
	jQuery(".containeer__you-may-like .slick-dots > li").removeClass('previous')  
	if (Math.abs(nextSlide - currentSlide) == 1) {
		direction = (nextSlide - currentSlide > 0) ? "left" : "right";
	  }
	  else {
		direction = (nextSlide - currentSlide > 0) ? "right" : "left";
	  }
	if(direction === "right"){
		if(nextSlide !== 2){
			jQuery(".containeer__you-may-like .slick-dots li:last-child").prev().addClass("previous")
		}else{
		 jQuery(".containeer__you-may-like .slick-dots .slick-active").addClass("previous");
		}
	}});
	/*burger*/
	$(document).ready(function(){
		$('.header__burger').click(function(event){
			$('.header__burger,.menu').toggleClass('active');
			$('body').toggleClass('lock');
		});
	});
	/*adaptive	menu*/
	