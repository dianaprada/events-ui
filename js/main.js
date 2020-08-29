/**
 * Imports
 */
import api from './services.js';

/**
 * Variables
 */
const btnSubmit = document.querySelector('.register-submit');
const divError = document.querySelector('.error');
const divSuccess = document.querySelector('.success');
const URL_REGISTER = 'http://localhost:8080/subscription';
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const inputName = document.getElementById('name');
const inputLastname = document.getElementById('lastname');
const inputCountry = document.getElementById('country');
let data = {};

/**
 * @method registerHandler
 * @description Methos that request to register an users
 */
const registerHandler = (() => {
  data = {
    username: inputEmail.value,
    password: inputPassword.value,
    name: inputName.value,
    lastname: inputLastname.value,
    country: inputCountry.value
  };
  api.register(URL_REGISTER, data)
  .then((response) => {
    divSuccess.style.display = 'flex';
    setTimeout(() => {
      window.location.replace("/");
    }, 2000);
  }).catch((error) => {
    divError.style.display = 'flex';
    setTimeout(() => {
      divError.style.display = 'none';
    }, 2000);
  });
})

/**
 * Listener
 */
btnSubmit.addEventListener('click', registerHandler);