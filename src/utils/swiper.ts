import { Swiper } from 'swiper';
import { Navigation } from 'swiper/modules';

export const swiperGlobal = () => {
  const swiperElements = Array.from(document.querySelectorAll('[swiper="component"]'));

  const swiperInstances = swiperElements.map((swiper, i) => {
    const swiperEl = swiper.querySelector('.swiper');
    const arrowRight = swiper.querySelector('[swiper="arrow-right"]');
    const arrowLeft = swiper.querySelector('[swiper="arrow-left"]');

    swiperEl.classList.add(`is-swiper-${i + 1}`);

    return {
      swiperEl: swiperEl,
      arrowRight: arrowRight,
      arrowLeft: arrowLeft,
    };
  });

  swiperInstances.forEach(({ swiperEl, arrowRight, arrowLeft }) => {
    const optionGroup = swiperEl.getAttribute('swiper-options');

    console.log(optionGroup);

    const swiperOptions = [
      {
        modules: [Navigation],
        speed: 800,
        loop: false,
        spaceBetween: 24,
        centeredSlides: false,
        slidesPerView: 4,
        preventClicksPropagation: false,
        navigation: {
          nextEl: arrowRight,
          prevEl: arrowLeft,
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1.125,
            spaceBetween: 24,
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 1,
            spaceBetween: 24,
          },
          // when window width is >= 992px
          992: {
            slidesPerView: 1,
            spaceBetween: 24,
          },
        },
      },
      {
        modules: [Navigation],
        speed: 800,
        loop: false,
        spaceBetween: 24,
        centeredSlides: false,
        slidesPerView: 4,
        preventClicksPropagation: false,
        navigation: {
          nextEl: arrowRight,
          prevEl: arrowLeft,
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1.125,
            spaceBetween: 24,
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          // when window width is >= 992px
          992: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        },
      },
    ];

    new Swiper(swiperEl, swiperOptions[optionGroup - 1]);
  });
};
