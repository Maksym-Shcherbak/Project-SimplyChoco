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
			slidesPerView: 3,
			spaceBetween: 28,
		},
	},
});
