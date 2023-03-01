let menuTrigger = document.querySelector("#menu");
let menu = document.querySelector("aside");

menuTrigger.addEventListener("click", function () {
    menu.classList.toggle("hidden");
});