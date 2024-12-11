let swiper = new Swiper(".swiper-banner", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  effect: "fade",
});

let swiper1 = new Swiper(".swiper-useful-links", {
  navigation: {
    nextEl: ".useful-links-next",
    prevEl: ".useful-links-prev",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
});
