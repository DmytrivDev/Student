const scrollToTopBtn = document.querySelector('.footer__scroll-btn');

scrollToTopBtn?.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});


const ankors = document.querySelectorAll('a.ankor');

ankors?.forEach(el => {

  el?.addEventListener('click', (event) => {
    event.preventDefault();

    const targetId = event.target.dataset.ankor;

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  });
});

