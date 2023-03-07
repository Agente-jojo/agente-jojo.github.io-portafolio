const navigationHeight = document.querySelector('.head__navigation').offsetHeight;

document.documentElement.style.setProperty('--scroll-padding', navigationHeight - 1 + 'px');