import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  getNumber = () => {
    this.setState(prevState => ({
      number: prevState.number + Math.floor(Math.random() * 100 + 1),
    }))
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg">
        <div className="container">
          <h1 className="heading">Count {number}</h1>
          {number % 2 ? (
            <p className="status">Count is Odd</p>
          ) : (
            <p className="status">Count is Even</p>
          )}
          <button className="button" type="button" onClick={this.getNumber}>
            Increment
          </button>
          <p className="desc">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
