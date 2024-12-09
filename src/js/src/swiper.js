const projectsSwiper = new Swiper(".projects__swiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  direction: 'vertical',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1440: {
      slidesPerView: 3,
      spaceBetween: 24,
      direction: 'horizontal',
      loop: true
    }
  }
});