import React from 'react'
import axios from 'axios'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      domains: []
    }
  }

  componentDidMount () {
    axios.get('/api/domains')
      .then(domains => this.setState({ domains: domains.data }))
      .catch(err => console.error(err))
  }

  render () {
    return (
      <div>
        <p className='center'>Lists each domain in the system.</p>
        <table className='table table-striped table-hover '>
          <thead>
            <tr>
              <th>#</th>
              <th>Domain Name</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.domains.map((domain, idx) =>
                <tr key={domain.id}>
                  <td>{idx}</td>
                  <td>{domain.url_text}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}
