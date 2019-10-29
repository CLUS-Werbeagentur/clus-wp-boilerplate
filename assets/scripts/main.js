import '../styles/main.scss'

if (module.hot) module.hot.accept()

document.addEventListener(
  'DOMContentLoaded',
  function DOMContentLoaded() {
    const menu = document.getElementById('header-menu')
    const button = document.getElementById('toggle-mobile-menu')

    button.addEventListener('click', function clickButton(event) {
      event.preventDefault()
      button.classList.toggle('menu--open')
      menu.classList.toggle('menu--open')
    })
  },
)
