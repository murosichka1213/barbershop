const burgerMenu = document.getElementById("burgerMenu");
const leftPanel = document.getElementById("leftPanel");
const closePanel = document.getElementById("closePanel");

burgerMenu.addEventListener("click", () => {
	leftPanel.style.transform = "translateX(-20vw)";
});

closePanel.addEventListener("click", () => {
	leftPanel.style.transform = "translateX(-200vw)";
});
