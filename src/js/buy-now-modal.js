(() => {
	const refs = {
		openModalBtn: document.querySelector("[buy-now-modal-open]"),
		openModalHeroBtn: document.querySelector("[buy-now-hero]"),
		closeModalBtn: document.querySelector("[buy-now-modal-close]"),
		closeSubmitBtn: document.querySelector("[buy-now-submit-close]"),
		modal: document.querySelector("[buy-now-modal]"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);
	refs.closeSubmitBtn.addEventListener("click", toggleModal);
	refs.openModalHeroBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle("is-hidden");
		document.body.classList.toggle("modal-open");
	}
})();
