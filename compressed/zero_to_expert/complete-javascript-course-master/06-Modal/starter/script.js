'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

//

//function to close the modal
const closeIt = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//function to open the modal
const openIt = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openIt);
}
btnCloseModal.addEventListener('click', closeIt);
overlay.addEventListener('click', closeIt);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeIt();
  }
});
