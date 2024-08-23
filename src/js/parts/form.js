import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';
import isEmpty from 'validator/lib/isEmpty';
import axios from 'axios';

export const formFunc = () => {
    
    async function sendForm(form) {
        const ajaxurl = '/wp-admin/admin-ajax.php';
        const headers = { "Content-Type": "multipart/form-data" };
        const myFormData = new FormData(form);
        const params = Object.fromEntries(myFormData.entries());

        try {
            const responce = await axios.get(ajaxurl, {params}, {headers});
            if(responce.data !== 'error') {
                formEnd(form, true);
            } else {
                formEnd(form, false);
            }
            
        } catch(error) {
            formEnd(form, false);
        }
    }

    function formEnd(form, status) {
        const openedPopup = document.querySelector('.show-done');
        if(openedPopup) {
            openedPopup.classList.remove('show-done');
        }
        if(status) {
            document.getElementById('seccessPopup').classList.add('show-done');
            document.querySelector('body').classList.remove('overhide');
        } else {
            document.getElementById('errorPopup').classList.add('show-done');
            document.querySelector('body').classList.remove('overhide');
        }
        

        setTimeout(() => form.reset(), 300);
    }

    const closeEls = document.querySelectorAll('.popup__close, .popup__underlay, .popup__closebtn');

    closeEls.forEach(el => {
        el.addEventListener('click', e => {
            document.querySelector('.popup.opened').classList.remove('opened');
        });
    });


    const forms = document.querySelectorAll('.submitForm');

    forms.forEach(form => {
        form.addEventListener('submit', submitForm);
    });

    function submitForm(e) {
        e.preventDefault();

        removeErrors();

        const fileds = e.target.elements;
        let errors = 0;

        Array.from(fileds).forEach(field => {
            const isReq = field.dataset.required;

            if(isReq) {
                const type = field.type;
                const val = field.value;

                if(checkField(field, type, val)) {
                    errors += 1;
                }
            }

            field.addEventListener('focus', removeErrors);
            field.addEventListener('change', removeErrors);
        });

        if(!errors) {
            sendForm(e.target);
        }
    }

    function checkField(field, type, val) {
        let errors = false;

        if(type === 'text') {
            if(isEmpty(val)) {
                field.closest('label').classList.add('error');
                errors = true;
            }
        }

        if(type === 'email') {
            if(isEmpty(val) || !isEmail(val)) {
                field.closest('label').classList.add('error');
                errors = true;
            }
        }

        if(type === 'tel') {
            // if(isEmpty(val) || !isMobilePhone(val, ['uk-UA'])) {
            if(isEmpty(val)) {
                field.closest('label').classList.add('error');
                errors = true;
            }
        }

        return errors;
    }

    function removeErrors() {
        const errors = document.querySelectorAll('.error');

        errors.forEach(el => {
            el.classList.remove('error');
        });
    }
}