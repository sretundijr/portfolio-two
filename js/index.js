
var manageState = {
  navHidden: true,
  screenWidth: window.innerWidth
}

function attachMenuButtonListener(element, callback) {
  element.addEventListener('click', function () {
    callback();
  });
}

function getElementId(id) {
  return document.getElementById(id);
}

function navContainer() {
  return document.getElementsByClassName('nav-link-container');
}

function showMenu() {
  navContainer()[0].style.display = 'block';
  manageState.navHidden = false;
}

function hideMenu() {
  navContainer()[0].style.display = 'none';
  manageState.navHidden = true;
}

function showNavBar() {
  navContainer()[0].style.display = 'flex';
  manageState.navHidden = false;
}

function handleMenuBtnEvent() {
  var menuBtn = getElementId('menu-btn');
  if (manageState.navHidden) {
    showMenu();
  } else {
    hideMenu();
  }
}

function handleNavEvent() {
  var navLinks = document.getElementsByClassName('nav-link');

  Array.from(navLinks).forEach(function (element) {
    element.addEventListener('click', function () {
      if (manageState.screenWidth <= 800) {
        handleMenuBtnEvent();
      }
    })
  });
}

function smoothScrolling() {
  $('a').on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
}

window.addEventListener('resize', function (e) {
  manageState.screenWidth = e.target.window.innerWidth;
  if (manageState.screenWidth > 800) {
    showNavBar();
  } else {
    hideMenu();
  }
});

document.addEventListener('DOMContentLoaded', function () {
  attachMenuButtonListener(getElementId('menu-btn'), handleMenuBtnEvent);
  handleNavEvent();
  smoothScrolling();
});
