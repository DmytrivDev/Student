import axios from "axios";
import scrollLock from 'scroll-lock';

import { openModal } from "./modal";

const telFields = document.querySelectorAll('input[type="tel"]');
const sendButtons = document.querySelectorAll('.sendButton');

telFields?.forEach(field => {
  field.addEventListener('input', function (event) {
    this.value = this.value.replace(/[^0-9+\-\(\)]/g, '');
  });
});

sendButtons?.forEach(el => {
  el.addEventListener('click', sendMail);
});

function sendMail(event) {
  event.preventDefault();
  const buttonElement = event.target;

  const thisForm = buttonElement.closest('form');
  const thisRequired = thisForm.querySelectorAll('.required');

  let errorsCount = 0;

  thisRequired.forEach(function (input) {
    const inputVal = input.value.trim();
    const reqType = input.getAttribute('type');

    if (reqType === 'tel') {
      if (inputVal.length < 6 || inputVal.length > 18) {
        errorsCount += 1;
        input.classList.add('form-error');
      }
    }

    if (reqType === 'text' || input.tagName.toLowerCase() === 'textarea') {
      if (inputVal.length < 1) {
        errorsCount += 1;
        input.classList.add('form-error');
      }
    }
  });

  if (errorsCount === 0) {
    sendFormData(thisForm);
  } else {
    buttonElement.classList.add('bounce');
    setTimeout(function () {
      buttonElement.classList.remove('bounce');
    }, 300);
  }

  document.querySelectorAll('input, textarea').forEach(function (input) {
    input.addEventListener('focusin', function () {
      input.classList.remove('form-error');
    });
  });
}

function sendFormData(form) {
  const formData = new FormData(form);

  axios
    .post('/wp-content/themes/student/mail.php', formData)
    .then(function (response) {
      const formModal = document.getElementById('callbackCall');

      formModal.classList.remove('is-visible');
      formModal.classList.remove('is-transition');
      scrollLock.enablePageScroll(formModal);

      openModal('successCall');

      setTimeout(function () {
        form.reset();
      }, 500);
    })
    .catch(function (error) {
      console.error('Помилка при відправці форми:', error);
    });
}
