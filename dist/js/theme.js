if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

let opDark = document.getElementById("theme-dark");
let opLight = document.getElementById("theme-light");

opDark.addEventListener("click", () => {
  document.documentElement.classList.add("dark");
  localStorage.setItem("color-theme", "dark");
});

opLight.addEventListener("click", () => {
  document.documentElement.classList.remove("dark");
  localStorage.setItem("color-theme", "light");
});
