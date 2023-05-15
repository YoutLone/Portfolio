const openMenu = document.querySelector('#menu');
const nav = document.querySelector('nav');
const navIcon = document.querySelectorAll('.navIcon');
const logo = document.querySelector('.navbar-logo');

openMenu.addEventListener('click', () => {
  logo.classList.toggle('hidden');
  nav.classList.toggle('open');
  navIcon.forEach((icon) => {
    icon.classList.toggle('hidden');
  });
});