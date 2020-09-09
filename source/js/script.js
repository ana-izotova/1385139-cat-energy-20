var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--closed');

// open/close mobile menu
navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
  }
});

//search form

var searchForm = document.querySelector('.search-form');

if (searchForm) {
  var catName = document.querySelector('[name=name]');
  var catWeight = document.querySelector('[name=weight]');
  var email = document.querySelector('[name=email]');
  var tel = document.querySelector('[name=tel]');

  const requiredFields = [catName, catWeight, email, tel];
  const requiredFieldsArray = [...requiredFields];
  requiredFieldsArray.forEach((field) => field.removeAttribute('required'))

  searchForm.addEventListener('submit', function (event) {
    for (const field of requiredFieldsArray) {
      field.classList.remove('search-form__text-input--error');
      if (!field.value) {
        event.preventDefault();
        field.classList.add('search-form__text-input--error');
      }
    }
  })
};
