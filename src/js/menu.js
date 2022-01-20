const burger = document.getElementById("burger");
const navItems = document.getElementsByClassName("nav__items");
burger.addEventListener("click", () => {
	console.log("clicked");
	const array = Array.from(navItems);
	array.forEach((x) => {
		x.style.display = "inline";
		x.classList.add("display__burger__menu");
	});
});
