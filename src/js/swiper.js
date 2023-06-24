const reviewsSwiper = new Swiper(".reviews .swiper", {
	// Optional parameters
	slidesPerView: 1,
	spaceBetween: 16,
	loop: true,
	grabCursor: true,
	direction: "horizontal",
	pagination: {
		el: ".reviews-swiper-pagination",
		clickable: true,
	},

	// effect: "coverflow",
	effect: "coverflow",
	coverflowEffect: {
		rotate: 50,
		slideShadows: true,
		depth: 50,
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

	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
});

const swip = new Swiper(".section-our-product .swiper", {
	// Optional parameters
	slidesPerView: "auto",
	spaceBetween: 18,
	centeredSlides: "true",
	loop: true,
	direction: "horizontal",
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	effect: "coverflow",
	coverflowEffect: {
		rotate: 0,
		slideShadows: false,
		depth: 100,
		modifier: 2.5,
		stretch: 0,
	},

	breakpoints: {
		// 768: {
		// 	slidesPerView: "auto",
		// },
		// 1200: {
		// 	slidesPerView: 4,
		// },
	},
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
});
