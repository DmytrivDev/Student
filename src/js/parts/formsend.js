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
      if (inputVal.length !== 12) {
        errorsCount += 1;
        input.classList.add('error');
      }
    }

    if (reqType === 'text' || input.tagName.toLowerCase() === 'textarea') {
      if (inputVal.length < 1) {
        errorsCount += 1;
        input.classList.add('error');
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
      input.classList.remove('error');
    });
  });
}

function sendFormData(form) {
  const formData = new FormData(form);

  axios
    .post('/wp-content/themes/student/mail.php', formData)
    .then(function (response) {
      setTimeout(function () {
        form.reset();
      }, 1100);
    })
    .catch(function (error) {
      console.error('Помилка при відправці форми:', error);
    });
}
