const menu = document.querySelector(".header-menu");
const btn = document.querySelector(".btn-menu");
const icon = document.querySelector(".btn-menu i");

btn.addEventListener("click", () => openMenu());

function openMenu() {
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
}
