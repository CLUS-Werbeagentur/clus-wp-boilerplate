import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ExampleComponent extends Component {
  constructor(props) {
    super()
    this.state = {
      value: props.value
    }
    this.handleIncrease = this.handleIncrease.bind(this)
  }

  handleIncrease() {
    this.setState(prevState => ({
      value: prevState.value + 1
    }))
  }

  render() {
    const { value } = this.state
    return (
      <div className='component'>
        <div className='value'>Der aktuelle Wert ist: {value}</div>
        <div className='increase'>
          <button type='button' onClick={this.handleIncrease}>
            Wert erhöhen
          </button>
        </div>
      </div>
    )
  }
}

ExampleComponent.propTypes = {
  value: PropTypes.number.isRequired
}

export default ExampleComponent
