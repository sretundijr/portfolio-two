
var manageState = {
  navHidden: true
}

function attachMenuButtonListener(element, callback) {
  element.addEventListener('click', function () {
    callback();
  });
}

function getElementId(id) {
  return document.getElementById(id);
}

function handleMenuBtnEvent() {
  var navContainer = getElementId('toggle-nav');
  var menuBtn = getElementId('menu-btn');
  if (manageState.navHidden) {
    navContainer.style.display = 'block';
    manageState.navHidden = false;
  } else {
    navContainer.style.display = 'none';
    manageState.navHidden = true;
  }
}

function handleNavEvent() {
  var navLinks = document.getElementsByClassName('nav-link');

  Array.from(navLinks).forEach(function (element) {
    element.addEventListener('click', function () {
      handleMenuBtnEvent();
    })
  });
}

document.addEventListener('DOMContentLoaded', function () {
  attachMenuButtonListener(getElementId('menu-btn'), handleMenuBtnEvent);
  handleNavEvent();
});
