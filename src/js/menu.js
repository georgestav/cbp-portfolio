const burger = document.getElementById("burger");
const navItems = document.getElementsByClassName("nav__items");
burger.addEventListener("click", () => {
	console.log("clicked");
	const array = Array.from(navItems);
	array.forEach((x) => {
		if (x.style.display === "inline") {
			x.style.display = "none";
		} else {
			x.style.display = "inline";
		}
	});
});
