import React from 'react'
import Domains from './Domains.jsx'
import Emails from './Emails.jsx'
import DomainCount from './DomainCount.jsx'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Q1: false,
      Q2: false,
      Q3: false
    }
    this.showQuestion = this.showQuestion.bind(this)
  }
  showQuestion (evt) {
    evt.preventDefault()
    if (evt.target.name === 'Q1') {
      this.setState({ Q1: true, Q2: false, Q3: false })
    } else if (evt.target.name === 'Q2') {
      this.setState({ Q1: false, Q2: true, Q3: false })
    } else if (evt.target.name === 'Q3') {
      this.setState({ Q1: false, Q2: false, Q3: true })
    }
  }
  render () {
    return (
      <div>
        <div className='center'>
          <button onClick={this.showQuestion} name='Q1' className='btn btn-primary'>1. All Domains</button>
          <button onClick={this.showQuestion} name='Q2' className='btn btn-primary'>2. Email Addresses</button>
          <button onClick={this.showQuestion} name='Q3' className='btn btn-primary'>3. Domain Count</button>
        </div>
        <div className='messages-padding'>
          {
            this.state.Q1
            ? <Domains />
            : (
              this.state.Q2
              ? <Emails />
              : (
                this.state.Q3
                ? <DomainCount />
                : <p className='center'>Click a button above to show question outputs</p>
              )
            )
          }
        </div>
      </div>
    )
  }
}
