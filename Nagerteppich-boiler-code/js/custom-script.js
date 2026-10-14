var swiper = new Swiper('.mySwiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper1 = new Swiper('.mySwiper1', {
  slidesPerView: 1.5,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
});
