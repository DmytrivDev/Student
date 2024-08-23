import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

let splideInstance;

const instSecondSlider = () => {
  const slider = document.querySelector('.splide');

  if (slider && !splideInstance) {
    const options = {
      type: 'slide',
      speed: 1000,
      updateOnMove: true,
      pagination: true,
      arrows: false,
      perPage: 1,
      perMove: 1,
      gap: '1.375rem',
    };

    splideInstance = new Splide(slider, options).mount();
  }
};

const destroySlider = () => {
  if (splideInstance) {
    splideInstance.destroy();
    splideInstance = null;
  }
};

const checkViewport = () => {
  instSecondSlider();
  if (window.innerWidth > 980) {
    destroySlider();
  }
};

checkViewport();
window.addEventListener('resize', checkViewport);
