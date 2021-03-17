new	Swiper('.swiper-container',{
	navigation:{
		nextE1:'.swiper-button-next',
		prevE1:'.swiper-button-prev'
	},
	pagination:{
		el:'.swiper-pagination',
		clickable:true,
	},
	slidesPerView:4,
	spaceBetween:111,
	loop:true,
	autoplay:{
		delay:3000,
	},
	breakpoints:{
370:{
	slidesPerView:1,
	},
570:{
	slidesPerView:2,
	},	
800:{
	slidesPerView:3,
	},
1100:{
	slidesPerView:4,
	}
	},
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
  });