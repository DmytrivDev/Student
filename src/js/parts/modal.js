import scrollLock from 'scroll-lock';

const header = document.querySelector('.header');

// Функція для відкриття попапу за ідентифікатором
export function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    const btnClose = modal.querySelector('.close-modal');
    const modalContainer = modal.querySelector('.modal__container');

    function showModal() {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      header.style.paddingRight = `${scrollBarWidth}px`;

      modal.classList.add('is-visible');
      modal.classList.add('is-transition');

      scrollLock.disablePageScroll(modal, {
        reserveScrollBarGap: true,
      });
    }

    function closeModal() {
      header.style.paddingRight = '';

      modal.classList.remove('is-visible');
      modal.classList.remove('is-transition');

      scrollLock.enablePageScroll(modal);
    }

    if (!modal.dataset.listenerAdded) {
      btnClose?.addEventListener('click', closeModal);

      modalContainer?.addEventListener('click', function (event) {
        if (event.target === modalContainer) {
          closeModal();
        }
      });

      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
          closeModal();
        }
      });

      modal.dataset.listenerAdded = 'true';
    }

    showModal();
  }
}

// Додаємо обробники подій для кнопок відкриття попапів
const btnsOpenModal = document.querySelectorAll('.open-modal');
btnsOpenModal?.forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.dataset.id;
    if (modalId) {
      openModal(modalId);
    }
  });
});
