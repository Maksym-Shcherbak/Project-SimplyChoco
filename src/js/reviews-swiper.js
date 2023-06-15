const swiper = new Swiper(".swiper", {
	// Optional parameters
	slidesPerView: 1,
	spaceBetween: 16,
	loop: true,
	direction: "horizontal",
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		1200: {
			speed: 750,
			slidesPerView: 3,
			centeredSlides: true,
			paginationClickable: true,
			spaceBetween: 28,
			grabCursor: true,
			waitForTransition: false,
		},
	},
	// allowSlidePrev: false,

	// mousewheel: true,
	// mousewheel: {
	// 	invert: false,
	// },
	// on: {
	// 	afterInit() {
	// 		this.allowSlidePrev = this.realIndex !== 0;
	// 	},
	// 	slideChange() {
	// 		this.allowSlidePrev = this.realIndex !== 0;
	// 	},
	// },
});
