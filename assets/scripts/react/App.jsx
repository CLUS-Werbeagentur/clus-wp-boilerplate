import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  return <div className="test">Sali, ich bin eine React-App!</div>
}

const domContainer = document.getElementById('react')
if (domContainer) {
  ReactDOM.render(<App />, domContainer)
}
