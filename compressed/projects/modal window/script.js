'use strict';
/**
 * I cloned the html and css UI and also wrote the JavaScript code
 * of the zero to expert course as a means of practice on DOM manipulation
 */
const showModal = document.querySelectorAll('.show-modal-1');
const modal = document.querySelector('.shown');
const closeModal = document.querySelector('.cancel');
const overlay = document.querySelector('.overlay');

// function to show the carousel
const clicked = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//function to close the modal window
const close = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//to show the modal window
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', clicked);
}

//to close the modal window
closeModal.addEventListener('click', close);
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) close();
});
