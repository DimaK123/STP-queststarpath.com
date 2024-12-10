// Переменные
const navButton = document.querySelector('.nav__button');
const header = document.querySelector('.header');
const menuBackground = document.querySelector('.menu-background');
const page = document.querySelector('.page');
const pageBody = document.querySelector('.page__body');
const pageHeader = document.querySelector('.page__header');
const pagePolicyTerms = document.querySelector('.page__policy-terms');
const arrOfNavLinks = document.querySelectorAll('.nav__link');

// Вычисления
const headerHeight = header.offsetHeight;
const pageHeaderTop = pageHeader.getBoundingClientRect().top;
const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
const fullHeaderHight = `${headerHeight + pageHeaderTop}px`;

// Устанавливаем scroll-padding для страницы
page.style.scrollPaddingTop = fullHeaderHight;

if (pagePolicyTerms) {
  pagePolicyTerms.style.marginTop = fullHeaderHight;
}

// Функция: Переключение меню
function toggleMenu() {
  navButton.classList.toggle('nav__button--close');
  header.classList.toggle('header--menu');
  menuBackground.classList.toggle('menu-background--open');
  pageBody.classList.toggle('page__body--fixed');
}

// Функция: Прокрутка страницы и добавление цвета шапке
function handleScroll() {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--pink');
  } else {
    header.classList.remove('header--pink');
  }
}

// События
navButton.addEventListener('click', toggleMenu);

arrOfNavLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (isSmallScreen) {
      toggleMenu();
    }
  });
});

window.addEventListener('scroll', handleScroll);