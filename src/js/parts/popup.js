const popBtns = document.querySelectorAll('.openPopup');
const popBtnsClose = document.querySelectorAll('.closePopup');

popBtns?.forEach(el => {

  el?.addEventListener('click', (event) => {
    event.preventDefault();

    const targetId = event.target.dataset.popup;

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        targetElement.classList.add('show-done');
        document.querySelector('body').classList.add('overhide');
    }
  });
});

popBtnsClose?.forEach(el => {

  el?.addEventListener('click', (event) => {
    const targetElement = event.target.closest('.modal');

    if (targetElement) {
        targetElement.classList.remove('show-done');
        document.querySelector('body').classList.remove('overhide');
    }
  });
});