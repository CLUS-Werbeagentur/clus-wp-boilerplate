import React from 'react'
import ReactDOM from 'react-dom'

import ExampleComponent from './Component'

const App = () => {
  return (
    <div className="test">
      Sali, ich bin eine React-App! Und hier kommt ein Component.
      <ExampleComponent value={1} />
    </div>
  )
}

const domContainer = document.getElementById('react')
if (domContainer) {
  ReactDOM.render(<App />, domContainer)
}
