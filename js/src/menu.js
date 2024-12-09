const navButton = document.querySelector('.nav__button');
const header = document.querySelector('.header');
const menuBackground = document.querySelector('.menu-background');
const pageBody = document.querySelector('.page__body');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('nav__button--close');
  header.classList.toggle('header--menu');
  menuBackground.classList.toggle('menu-background--open');
  pageBody.classList.toggle('page__body--fixed');
})