function handleScroll() {
  const header = document.querySelector('.header');
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition > 300) {
    header.classList.add('scroll-down');
  } else {
    header.classList.remove('scroll-down');
  }
}

document.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', handleScroll);
