// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  getButtonText() {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  subscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    return (
      <div className="welcomeApp-bg-container">
        <h1 className="welcomeApp-heading">Welcome</h1>
        <p className="welcomeApp-para">Thank you! Happy Learning</p>
        <button
          onClick={this.subscribe}
          type="button"
          className="welcomeApp-subscribe-btn"
        >
          {this.getButtonText()}
        </button>
      </div>
    )
  }
}

export default Welcome
