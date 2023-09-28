var swiper = new Swiper(".swiper-container", {
//     slidesPerView: 2,
//   spaceBetween: 40,
  centeredSlides: true,
  loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 640px
        990: {
          slidesPerView: 2,
          spaceBetween: 40
        }
      }
  });