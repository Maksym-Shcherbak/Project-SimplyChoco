(() => {
	const modalBtns = document.querySelectorAll("[data-modal-open]");
	const closeModalBtns = document.querySelectorAll("[data-modal-close]");
	const modals = document.querySelectorAll("[data-modal]");

	modalBtns.forEach(btn => {
		btn.addEventListener("click", () => {
			const modalId = btn.getAttribute("data-modal-open");
			const modal = document.querySelector(`[data-modal="${modalId}"]`);
			modal.classList.add("is-open");
			document.body.classList.add("modal-open");
		});
	});

	closeModalBtns.forEach(btn => {
		btn.addEventListener("click", () => {
			const modal = btn.closest("[data-modal]");
			modal.classList.remove("is-open");
			document.body.classList.remove("modal-open");
		});
	});

	document.addEventListener("keydown", event => {
		if (event.key === "Escape") {
			modals.forEach(modal => {
				if (modal.classList.contains("is-open")) {
					modal.classList.remove("is-open");
					document.body.classList.remove("modal-open");
				}
			});
		}
	});

	modals.forEach(modal => {
		modal.addEventListener("click", event => {
			if (event.target === modal) {
				modal.classList.remove("is-open");
				document.body.classList.remove("modal-open");
			}
		});
	});
})();

// Show/hide password onClick of button using Javascript only

// https://stackoverflow.com/questions/31224651/show-hide-password-onclick-of-button-using-javascript-only

function show() {
	var p = document.getElementById("pwd");
	p.setAttribute("type", "text");
}

function hide() {
	var p = document.getElementById("pwd");
	p.setAttribute("type", "password");
}

var pwShown = 0;

document.getElementById("eye").addEventListener(
	"click",
	function () {
		if (pwShown == 0) {
			pwShown = 1;
			show();
		} else {
			pwShown = 0;
			hide();
		}
	},
	false,
);
