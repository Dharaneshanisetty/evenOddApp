import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    randomInteger: 0,
  }

  onCheckInteger = () => {
    this.setState(prevState => ({
      randomInteger: Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {randomInteger} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Count {randomInteger}</h1>
        {randomInteger % 2 === 0 ? (
          <p className="para">Count is Even</p>
        ) : (
          <p className="para">Count is Odd</p>
        )}
        <button
          type="button"
          className="increment-button"
          onClick={this.onCheckInteger}
        >
          Increment
        </button>
        <p className="info">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
