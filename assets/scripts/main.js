import '../styles/main.scss'
import './react/App'

if (module.hot) module.hot.accept()

console.log('Dom content loaded 4.')

document.addEventListener('DOMContentLoaded', function DOMContentLoaded() {
  console.log('Dom content loaded 2.')
})
