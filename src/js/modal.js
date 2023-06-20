(() => {
	const modalBtns = document.querySelectorAll("[data-modal-open]");
	const closeModalBtns = document.querySelectorAll("[data-modal-close]");
	const modals = document.querySelectorAll("[data-modal]");

	modalBtns.forEach(btn => {
		btn.addEventListener("click", () => {
			const modalId = btn.getAttribute("data-modal-open");
			const modal = document.querySelector(`[data-modal="${modalId}"]`);
			// modal.classList.add("is-open");
			modal.classList.remove("is-hidden");
			document.body.classList.add("modal-open");
		});
	});

	closeModalBtns.forEach(btn => {
		btn.addEventListener("click", () => {
			const modal = btn.closest("[data-modal]");
			modal.classList.add("is-hidden");
			document.body.classList.remove("modal-open");
		});
	});

	modals.forEach(modal => {
		modal.addEventListener("click", event => {
			if (event.target === modal) {
				modal.classList.add("is-hidden");
				document.body.classList.remove("modal-open");
			}
		});
	});
})();
