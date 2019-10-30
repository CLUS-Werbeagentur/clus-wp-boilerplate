import '../styles/main.scss'
import './react/App'

if (module.hot) module.hot.accept()

document.addEventListener('DOMContentLoaded', function DOMContentLoaded() {
  const menu = document.getElementById('header-menu')
  const button = document.getElementById('toggle-mobile-menu')

  if (button) {
    button.addEventListener('click', function clickButton(event) {
      event.preventDefault()
      button.classList.toggle('menu--open')
      menu.classList.toggle('menu--open')
    })
  }
})
