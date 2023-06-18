const reviewsSwiper = new Swiper(".reviews .swiper", {
	// Optional parameters
	slidesPerView: 1,
	spaceBetween: 16,
	loop: true,
	direction: "horizontal",
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	// effect: "coverflow",
	effect: "coverflow",
	coverflowEffect: {
		rotate: 30,
		slideShadows: true,
		depth: 100,
		modifier: 1,
		stretch: 0,
	},

	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 28,
		},
	},
});
