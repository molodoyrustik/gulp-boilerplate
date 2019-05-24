var navMain = document.querySelector('.main-nav');
var userBlock = document.querySelector('.user-block');
var pageHeader = document.querySelector('.page-header');
var navToggle = document.querySelector('.page-header__toggle');

navMain.classList.remove('main-nav--nojs');
userBlock.classList.remove('user-block--nojs');

navToggle.addEventListener('click', (e) => {
  if (pageHeader.classList.contains('page-header--closed')) {
    pageHeader.classList.remove('page-header--closed');
    pageHeader.classList.add('page-header--opened');
  } else {
    pageHeader.classList.add('page-header--closed');
    pageHeader.classList.remove('page-header--opened');
  }

  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
})