function pcShow() {
	const pcShow = document.querySelector(".pc-show");
	const pcButtonShow = document.querySelector(".pc-button-show");

	if (pcShow && pcButtonShow) {
		pcButtonShow.addEventListener("click", function () {
			pcShow.classList.toggle("active");
			if (pcShow.classList.contains("active")) {
				pcShow.style.display = "block";
			} else {
				pcShow.style.display = "none";
			}
		});
	}

	const pcShowDropdown = document.querySelector(".pc-info");
	const pcShowButtonDropdown = document.querySelector(".pc-button-info");

	if (pcShowDropdown && pcShowButtonDropdown) {
		pcShowButtonDropdown.addEventListener("mouseover", function () {
			pcShowDropdown.style.display = "block";
		});
		pcShowButtonDropdown.addEventListener("mouseleave", function () {
			pcShowDropdown.style.display = "none";
		});
		pcShowDropdown.addEventListener("mouseover", function () {
			pcShowDropdown.style.display = "block";
		});
		pcShowDropdown.addEventListener("mouseleave", function () {
			pcShowDropdown.style.display = "none";
		});
	}
}
pcShow()

function mobileShow() {
	const mobileShow = document.querySelector(".mobile-show");
	const mobileButtonShow = document.querySelector(".mobile-button-show");

	if (mobileShow && mobileButtonShow) {
		mobileButtonShow.addEventListener("click", function () {
			mobileShow.classList.toggle("active");
			if (mobileShow.classList.contains("active")) {
				mobileShow.style.display = "block";
			} else {
				mobileShow.style.display = "none";
			}
		});
	}

	const mobileShowDropdown = document.querySelector(".mobile-info");
	const mobileShowButtonDropdown = document.querySelector(".mobile-button-info");

	if (mobileShowDropdown && mobileShowButtonDropdown) {
		mobileShowButtonDropdown.addEventListener("click", function () {
			mobileShowDropdown.classList.toggle("active");

			if (mobileShowDropdown.classList.contains("active")) {
				mobileShowDropdown.style.display = "block";
			} else {
				mobileShowDropdown.style.display = "none";
			}
		});
		document.addEventListener("click", function (e) {
			if (mobileShowDropdown.classList.contains("active") && !e.target.closest(".mobile-button-info")) {
				mobileShowDropdown.classList.remove("active");

				if (mobileShowDropdown.classList.contains("active")) {
					mobileShowDropdown.style.display = "block";
				} else {
					mobileShowDropdown.style.display = "none";
				}
			}
		});
	}
}
mobileShow()