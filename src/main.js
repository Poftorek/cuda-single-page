import './style.scss'

const handleActiveButtons = (name, activeClass) => {
  const Items = document.querySelectorAll(name);
  for (const item of Items) {
    item.addEventListener('click', function () {
      for (const item of Items) {
        item.classList.remove(activeClass);
      }
      this.classList.add(activeClass);
    });
  }
}
handleActiveButtons('.nav__item', 'nav__item--active');
handleActiveButtons('.buttons-group__btn', 'buttons-group__btn--active');