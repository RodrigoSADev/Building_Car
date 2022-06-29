/* Menu Mobile */
const btnMobile = document.querySelector(".btn-mobile");
function toggleMenu() {
  const nav = document.querySelector(".navigation");
  nav.classList.toggle("active");
}
btnMobile.addEventListener("click", toggleMenu);

/* Smooth Scroll */
const menuItems = document.querySelectorAll(".navigation a");
menuItems.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
});
function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 240;
  scrollToPosition(to);
}
function scrollToPosition(to) {
  window.scroll({
    top: to,
    behavior: "smooth",
  });
}
function getScrollTopByHref(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}
