import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordionContainer = document.querySelector('.accordion-container');
if (accordionContainer) {
  new Accordion('.accordion-container', {
    duration: 400,
    showMultiple: false,
    openOnInit: [0],
  });
}
