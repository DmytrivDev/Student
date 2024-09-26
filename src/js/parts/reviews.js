import axios from 'axios';

async function loadFutureEvents(page) {
  try {
    const formData = new FormData();
    const castomP = document.querySelector('.custom-pagination');
    const perPage = castomP.dataset.perpage ? castomP.dataset.perpage : 8;
    const isFull = castomP.dataset.isFull;

    formData.append('action', 'load_reviews');
    formData.append('page', page);
    formData.append('perpage', perPage);
    formData.append('isFull', isFull);

    const response = await axios.post('/wp-admin/admin-ajax.php', formData);

    if (response.data) {
      document.querySelector('.rev__list').innerHTML = response.data.posts;

      // Оновлюємо пагінацію
      document.querySelector('.custom-pagination').innerHTML =
        response.data.pagination;

      // Додаємо слухачів до нових елементів пагінації
      addPaginationListeners();
    }
  } catch (error) {
    console.log(error);
  }
}

// Додаємо слухачів подій для елементів пагінації
function addPaginationListeners() {
  const paginationLinks = document.querySelectorAll('.page-numbers');

  paginationLinks?.forEach(function (link) {
    link?.addEventListener('click', function (e) {
      e.preventDefault();
      const url = this.getAttribute('href');
      const searchParams = new URLSearchParams(new URL(url).search);
      let page = searchParams.get('paged');

      if (!page) {
        page = url.match(/\/page\/(\d+)/)[1];
      }

      loadFutureEvents(page);
    });
  });
}

// Ініціалізуємо слухачі при завантаженні сторінки
addPaginationListeners();

const revBtn = document.querySelector('.wpcr3_respond_3 .wpcr3_button_1');
const nameInput = document.querySelector('#wpcr3_fname');
const textInput = document.querySelector('#id_wpcr3_ftext');
const sub = document.querySelector('.wpcr3_submit_btn');
const cenc = document.querySelector('.wpcr3_cancel_btn');
const title = document.querySelector('.wpcr3_leave_text');

if (revBtn) {
  revBtn.innerHTML = 'Напишіть свій відгук';
}

if (sub) {
    sub.innerHTML = 'Відправити';
}

if (cenc) {
    cenc.innerHTML = 'Закрити';
}

if (title) {
    title.innerHTML = 'Ваш відгук';
}

if (nameInput) {
    nameInput.placeholder = 'Ваше ім‘я'
}

if (textInput) {
    textInput.placeholder = 'Ваш відгук'
}
