document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.header');
  let lastScrollTop = 0;

  window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      header.classList.add('is-fixed');

      setTimeout(() => {
        header.classList.remove('scroll-down');
      }, 200);
    } else {
      header.classList.remove('is-fixed');
      header.classList.add('scroll-down');
    }

    if (scrollTop === 0) {
      header.classList.remove('scroll-down');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
});
