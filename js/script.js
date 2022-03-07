const navToogle = document.querySelector("#navToggle");
const navItems = document.querySelector("#nav_items");
const navButtons = document.querySelector("#navButtons");

navToogle.addEventListener("click",() =>{
    navItems.classList.toggle('nav__items__open');
    navButtons.classList.toggle('nav__buttons__open');
})