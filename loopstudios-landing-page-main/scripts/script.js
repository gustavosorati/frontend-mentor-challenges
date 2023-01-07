const menu = document.querySelector('.btn-menu-mobile');
let aux = 0;

function menuMobile(event) {
  const body = document.querySelector('body');
  const nav = document.querySelector('.app__nav__menu');

  nav.classList.toggle('active-mobile-menu');
  this.classList.toggle('active');
  body.classList.toggle('active-menu');
}

menu.addEventListener('click', menuMobile);

function ResetStyles() {
  let windowWidth = window.innerWidth;

  if (windowWidth > 768 && windowWidth != aux) {
    const body = document.querySelector('body');
    const nav = document.querySelector('.app__nav__menu');

    nav.classList.remove('active-mobile-menu');
    menu.classList.remove('active');
    body.classList.remove('active-menu');
    // console.log('loop');
    // console.log(aux);
    // console.log(windowWidth);
  }
  aux = windowWidth;
}

setInterval(() => {
  ResetStyles();
});
