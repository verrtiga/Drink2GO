
// leaflet

const map = L.map('map')
  .setView({
    lat: 59.968137,
    lng: 30.316272,
  }, 18);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/marker.svg',
  iconSize: [38, 50],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 59.96831,
    lng: 30.31748,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

map.setView({
  lat: 59.96831,
  lng: 30.31748,
}, 18);

mainPinMarker.addTo(map);




// slider-swiper
const swiper = new Swiper('.swiper', {

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  effect: 'fade',

  fadeEffect: {

    crossFade: true

  }
});

// mobile-menu
let nav = document.querySelector('.navigation__container');
let toggle = document.querySelector('.header__toggle-menu');
let head = document.querySelector('.header__toggle-menu');

nav.classList.remove('navigation__container--nojs');
head.classList.remove('header--nojs');

toggle.addEventListener('click', function () {
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
