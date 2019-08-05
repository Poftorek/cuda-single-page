import './style.scss'

const navItems = document.querySelectorAll('.nav__item');
for (const item of navItems) {
  item.addEventListener('click', function () {
    for (const item of navItems) {
      item.classList.remove('nav__item--active');
    }
    this.classList.add('nav__item--active');
  });
}