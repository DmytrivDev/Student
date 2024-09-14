import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

let guaranteeSliderInstance;
let completedSliderInstance;

const instGuaranteeSlider = () => {
  const slider = document.querySelector('.guarantee__splide');

  if (slider && !guaranteeSliderInstance) {
    const options = {
      type: 'slide',
      speed: 1000,
      updateOnMove: true,
      pagination: true,
      arrows: false,
      perPage: 1,
      perMove: 1,
      gap: '1.25rem',
    };

    guaranteeSliderInstance = new Splide(slider, options).mount();
  }
};

const instCompletedSlider = () => {
  const slider = document.querySelector('.completed__splide');

  if (slider && !completedSliderInstance) {
    const options = {
      type: 'slide',
      speed: 1000,
      updateOnMove: true,
      pagination: true,
      arrows: false,
      perPage: 1,
      perMove: 1,
      gap: '1.25rem',
    };

    completedSliderInstance = new Splide(slider, options).mount();
  }
};

const destroySliders = () => {
  if (guaranteeSliderInstance) {
    guaranteeSliderInstance.destroy();
    guaranteeSliderInstance = null;
  }

  if (completedSliderInstance) {
    completedSliderInstance.destroy();
    completedSliderInstance = null;
  }
};

const checkViewport = () => {
  instGuaranteeSlider();
  instCompletedSlider();

  if (window.innerWidth > 760) {
    destroySliders();
  }
};

checkViewport();
window.addEventListener('resize', checkViewport);
