import React from 'react'
import PropTypes from 'prop-types'

export default class Stepper extends React.Component {
  render() {
    return (
      <button onClick={() => this.props.changeValue(this.props.step)}>
        Change by {this.props.step}
      </button>
    )
  }
}

Stepper.propTypes = {
  changeValue: PropTypes.func,
  step: PropTypes.number
}
