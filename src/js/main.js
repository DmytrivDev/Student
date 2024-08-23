import { initMenu } from './parts/navigation';
import './parts/accordion';
import './parts/items-progress';
import './parts/scroll';
import './parts/splide';
import './parts/popup';
import { formFunc } from './parts/form';

initMenu();
formFunc();

document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.header');
  let lastScrollTop = 0;

  window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Скрол вниз
        header.classList.add('fixed');
      } else {
        // Скрол вгору
        header.classList.remove('fixed');
      }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Запобігає негативним значенням
  });
});
