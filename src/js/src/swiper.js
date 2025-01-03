const projectsSwiper = new Swiper(".projects__swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  direction: 'vertical',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  touchReleaseOnEdges: true,

  breakpoints: {
    769: {
      slidesPerView: 3,
      spaceBetween: 24,
      direction: 'horizontal',
    }
  }
});