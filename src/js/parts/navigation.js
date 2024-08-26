const burger = document.querySelector('.burger-menu');

const mobMenu = document.querySelector('.mob');
const navLinks = document.querySelectorAll('.nav__link');
const headerSoc = document.querySelector('.header__soc');
const headerBtnMob = document.querySelector('.header__btn-mob');
const logoDef = document.querySelector('.logo-def');

const popupHeading = document.querySelector('.mob__nav .popup-nav__heading');
const navPopupLink = document.querySelector('.mob__nav .nav__popup-link');
const popupNav = document.querySelector('.mob__nav .popup-nav');

const body = document.querySelector('body');

function updateMobMenuBodyMargin() {
  const headerTop = document.querySelector('.header__top');
  const mobMenuBody = document.querySelector('.mob__body');

  const height = headerTop.getBoundingClientRect().height;

  mobMenuBody.style.marginTop = `${height}px`;
  mobMenuBody.style.height = `calc(100% - ${height}px)`;
}

function toggleMenu() {
  burger.classList.toggle('is-opened');
  mobMenu.classList.toggle('is-opened');
  headerSoc.classList.toggle('is-opened');
  headerBtnMob.classList.toggle('is-opened');
  logoDef.classList.toggle('is-opened');
  body.classList.toggle('hideMob');
  popupNav.classList.remove('is-active');
}

function closeMenu() {
  burger.classList.remove('is-opened');
  mobMenu.classList.remove('is-opened');
  headerSoc.classList.remove('is-opened');
  headerBtnMob.classList.remove('is-opened');
  logoDef.classList.remove('is-opened');
  body.classList.remove('hideMob');
}

export function initMenu() {
  updateMobMenuBodyMargin();
  window.addEventListener('resize', updateMobMenuBodyMargin);

  if (burger) {
    burger.addEventListener('click', toggleMenu);
  }

  if (navLinks) {
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }
}

function togglePopupNav() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 960) {
    popupNav.classList.toggle('is-active');
  }
}

export function initPopupMenu() {
  navPopupLink.addEventListener('click', function (event) {
    console.log('object');
    event.preventDefault();
    togglePopupNav();
  });

  popupHeading.addEventListener('click', function () {
    togglePopupNav();
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 960 && popupNav?.classList.contains('is-active')) {
      popupNav.classList.remove('is-active');
    }
  });
}
