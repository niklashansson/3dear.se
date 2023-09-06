import { swiperGlobal, test } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  swiperGlobal();
});
