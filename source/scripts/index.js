document.addEventListener('DOMContentLoaded', function () {

  var nav = document.querySelector('.main-nav');
  var toggleButton = document.querySelector('.button-toogle');

  nav.classList.add('main-nav--closed');
  toggleButton.classList.add('button-toogle--visible');

  toggleButton.addEventListener('click', function () {
    nav.classList.toggle('main-nav--closed');
    nav.classList.toggle('main-nav--open');

    toggleButton.classList.toggle('button-toogle--visible');
    toggleButton.classList.toggle('button-toogle--close');
  });

  document.addEventListener('click', function (event) {
    var isClickInsideNav = nav.contains(event.target);
    var isClickOnToggleButton = toggleButton.contains(event.target);

    if (!isClickInsideNav && !isClickOnToggleButton) {

      nav.classList.remove('main-nav--open');
      nav.classList.add('main-nav--closed');

      toggleButton.classList.remove('button-toogle--close');
      toggleButton.classList.add('button-toogle--visible');
    }
  });
});



