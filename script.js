const menuHamburguer = document.querySelector(".check-btn");
const navList = document.querySelector(".nav-list");
const actions = document.querySelector(".actions");
const aLink = document.querySelectorAll(".link");

console.log(aLink);

menuHamburguer.addEventListener("click", () => {
  navList.classList.toggle("active");
  actions.classList.toggle("active");
});


aLink.forEach(link => {
  link.addEventListener("click", () => {
    navList.classList.toggle("active");
    actions.classList.toggle("active");
  });
});
