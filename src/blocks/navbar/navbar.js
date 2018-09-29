const buttonNav = document.querySelector('.topbar__button');

function toggleNavbar() {
  document.querySelector('.navbar').classList.toggle('navbar--hidden');
}

buttonNav.addEventListener('click', toggleNavbar);
