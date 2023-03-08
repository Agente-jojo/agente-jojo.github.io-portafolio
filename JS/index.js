const navigationHeight = document.querySelector('.head__navigation',).offsetHeight;
document.documentElement.style.setProperty('--scroll-padding', navigationHeight - 1 + 'px');

const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.nav__list');
const barras = document.querySelectorAll('.ham span');

ham.addEventListener('click', () => {
  enlaces.classList.toggle('activado');
  barras.forEach(child => {child.classList.toggle('animado')});
});


