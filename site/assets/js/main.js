// Hevinet site — small progressive-enhancement script.
// No framework required; safe to include on every page.

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      var expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  }

  // On touch devices the Products dropdown can't rely on :hover,
  // so tapping the "Products" link toggles it instead of navigating.
  var productsLink = document.querySelector('.nav-products > a');
  var productsWrap = document.querySelector('.nav-products');
  if (productsLink && productsWrap) {
    productsLink.addEventListener('click', function (e) {
      if (window.matchMedia('(max-width: 820px)').matches) {
        e.preventDefault();
        productsWrap.classList.toggle('open');
      }
    });
  }
});
