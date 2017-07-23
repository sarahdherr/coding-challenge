import React from 'react'
import axios from 'axios'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      domainCount: {}
    }
  }

  componentDidMount () {
    axios.get('/api/domains/messages')
      .then(domainCount => this.setState({ domainCount: domainCount.data }))
      .catch(err => console.error(err))
  }

  render () {
    const domainArr = Object.keys(this.state.domainCount) || []
    return (
      <div>
        <p className='center'>Lists each domain and total number of emails sent to it (combining To, CC, & BCC).</p>
        <table className='table table-striped table-hover'>
          <thead>
            <tr>
              <th>#</th>
              <th>Domain Name</th>
              <th>Message Count</th>
            </tr>
          </thead>
          <tbody>
            {
              domainArr.map((domain, idx) =>
                <tr key={idx}>
                  <td>{idx}</td>
                  <td>{domain}</td>
                  <td>{this.state.domainCount[domain]}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}
