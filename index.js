let openMenu = document.querySelector('#menu');
let nav = document.querySelector('nav');
let navIcon = document.querySelectorAll('.navIcon');
let logo = document.querySelector('.navbar-logo');

openMenu.addEventListener('click', () => {
  logo.classList.toggle('hidden');
  nav.classList.toggle('open');
  navIcon.forEach((icon) => {
    icon.classList.toggle('hidden');
  });
});