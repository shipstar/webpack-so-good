import React from 'react'

import Stepper from './stepper'
import store from './store'

export default class Counter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: store.value(),
      step: 1
    }
  }

  increment() {
    this.setState({
      value: store.increment(this.state.step)
    })
  }

  decrement() {
    this.setState({
      value: store.decrement(this.state.step)
    })
  }

  changeValue(amount) {
    this.setState({
      value: store.change(amount)
    })
  }

  changeStep(step) {
    this.setState({ step })
  }

  render() {
    return (
      <div>
        <p>
          Value: {this.state.value}
        </p>

        <label>Step: </label>
        <input
          type="number"
          onChange={e => this.changeStep(parseInt(e.target.value))}
          value={this.state.step}
        />

        <br /> <br />

        <Stepper
          changeValue={amount => this.changeValue(amount)}
          step={this.state.step}
        />
      </div>
    )
  }
}
