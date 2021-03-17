$(document).ready(function(){
	$('.slider-pl').slick({
		dots:true,
		slidesToShow: 4,
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
	$('.slider-pl').on('beforeChange', function(e){
		console.log($(".container__product-landacape .slick-dots .slick-active"))
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
			  breakpoint: 670,
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
	$('.slideyml').on('beforeChange', function(e){
		console.log($(".containeer__you-may-like .slick-dots .slick-active"))
	});
  });
  