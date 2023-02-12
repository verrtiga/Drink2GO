
const swiper = new Swiper('.swiper', {
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let nav = document.querySelector('.navigation__container');
let toggle = document.querySelector('.header__toggle-menu');
let head = document.querySelector('.header__toggle-menu');

nav.classList.remove('navigation__container--nojs');
head.classList.remove('header--nojs');

toggle.addEventListener('click', function (){
  if (nav.classList.contains('navigation__container--close')) {
    nav.classList.remove('navigation__container--close');
    nav.classList.add('navigation__container--open');
    toggle.classList.remove('header__toggle-menu--open');
    toggle.classList.add('header__toggle-menu--close');

  } else {
    nav.classList.add('navigation__container--close');
    nav.classList.remove('navigation__container--open');
    toggle.classList.add('header__toggle-menu--open');
    toggle.classList.remove('header__toggle-menu--close');
  }
})

