const menuBtn = document.querySelector('.menu-button');
const menuClose = document.querySelector('.menu-close-btn');
const menuList = document.querySelector('.menu-list');

menuBtn.addEventListener('click', () => {
  menuList.classList.add('menu-list-open');
});

menuClose.addEventListener('click', () => {
  menuList.classList.remove('menu-list-open');
});
