/* Nav dropdown toggle */

const body = document.body;
const navButton = document.getElementById("nav-button");
const navDropdown = document.getElementById("nav-dropdown");

function open() {
	navDropdown.classList.add("open");
	// Move the main content down by the height of the nav bar
	const { height } = navDropdown.getBoundingClientRect();
	body.style.marginTop = `${height}px`;
	sessionStorage.setItem("navOpen", true);
}

function close() {
	navDropdown.classList.remove("open");
	body.style.marginTop = "";
	sessionStorage.setItem("navOpen", false);
}

function toggle() {
	(navDropdown.classList.contains("open") ? close : open)();
}

// Restore nav state from last page
if (sessionStorage.getItem("navOpen") === "true") {
	open();
}

navButton.addEventListener("click", function() {
	toggle();
});

// Close when clicking outside the nav
document.addEventListener("click", function(event) {
	const clickedInsideNav = navButton.contains(event.target) || navDropdown.contains(event.target);
	if (!clickedInsideNav) {
		close();
	}
});
