const menu = document.querySelector(".menu");
const nav = document.querySelector(".list");
const close = document.querySelector(".close");
const remain = document.querySelector(".remain");

menu.addEventListener("click", () => {
  nav.classList.add("list__visible");
  close.classList.add("close__visible");
  menu.classList.add("menu__hide");
});
close.addEventListener("click", () => {
  nav.classList.remove("list__visible");
  close.classList.remove("close__visible");
  menu.classList.remove("menu__hide");
});
remain.addEventListener("click", () => {
  if (nav.classList.contains("list__visible")) {
    nav.classList.remove("list__visible");
    close.classList.remove("close__visible");
    menu.classList.remove("menu__hide");
  }
});
