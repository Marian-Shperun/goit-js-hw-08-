import throttle from 'lodash.throttle';

const formElement = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

let formValue = {};

formElement.addEventListener('input', throttle(saveDataForm, 1000));
formElement.addEventListener('submit', handlerSubmit);

function saveDataForm(e) {
  formValue[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formValue));
}

function handlerSubmit(e) {
  e.preventDefault();
  const { email: emailForm, message: messageForm } = formElement.elements;
  emailForm.value === '' || messageForm.value === ''
    ? alert('Заповніть поля')
    : e.target.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function showDataForm() {
  const localStorageValue = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (localStorageValue) {
    const { email, message } = localStorageValue;
    const { email: emailForm, message: messageForm } = formElement.elements;
    emailForm.value = email || '';
    messageForm.value = message || '';

    formValue = localStorageValue;
  }
}

showDataForm();
