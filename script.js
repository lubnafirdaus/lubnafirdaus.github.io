let swiperCards = new Swiper(".cards", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: ".my-button-next",
      prevEl: ".my-button-prev",
    },
  
    breakpoints:{
      968: {
        slidesPerView: 1,
      },
    },
});
