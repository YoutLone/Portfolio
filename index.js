const openMenu = document.querySelector('#menu');
const nav = document.querySelector('nav');
const navIcon = document.querySelectorAll('.navIcon');
const logo = document.querySelector('.navbar-logo');
const hamburger = document.querySelector('#hamburger');

openMenu.addEventListener('click', () => {
  logo.classList.toggle('hidden');
  nav.classList.toggle('open');
  navIcon.forEach((icon) => {
    icon.classList.toggle('hidden');
  });
});

window.addEventListener('resize', () => {
  if (document.body.clientWidth > 768) {
    nav.classList.remove('open');
    navIcon.forEach((icon) => {
      icon.classList.add('hidden');
    });
    hamburger.classList.remove('hidden');
    logo.classList.remove('hidden');
  }
});