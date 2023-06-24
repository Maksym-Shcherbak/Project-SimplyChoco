$(document).ready(function () {
	$(".hero-btn-list a, .mobile-navi-link, .menu-link, .back-to-top, .yank-link, .hero-btn-scroll").click(function (e) {
		if ($(this).attr("href").indexOf("#") != -1) {
			// Проверяем, является и ссылка действительно якорной ссылкой.
			e.preventDefault(); // Отменяем событие перехода.
			var href = $(this).attr("href").replace("#", ""); // Получаем из якорной ссылки нужный ID элемента, к которому будет происходить переход.

			if ($("#" + href).length > 0) {
				// Проверяем, существует ли на странице нужный нам элемент.
				var tophref = $("body")
					.find("#" + href)
					.offset().top; // Получаем координаты элемента, относительно начала страницы.
				$("html, body").animate({ scrollTop: tophref }, 1900); // Создаём анимацию скрола к нужному элементу.
			}
		}
	});
});

// initialization of aos
AOS.init({
	once: false,
	mirror: true,
});
