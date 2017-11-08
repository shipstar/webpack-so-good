import React from 'react'
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

  changeStep(step) {
    this.setState({ step })
  }

  render() {
    return (
      <div>
        <p>
          Value: {this.state.value}
        </p>

        <button onClick={() => this.increment()}>+</button>
        <button onClick={() => this.decrement()}>-</button>

        <label>Step: </label>
        <input
          type="number"
          onChange={e => this.changeStep(parseInt(e.target.value))}
          value={this.state.step}
        />
      </div>
    )
  }
}
