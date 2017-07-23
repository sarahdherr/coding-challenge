import React from 'react'
import axios from 'axios'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      emails: []
    }
  }

  componentDidMount () {
    axios.get('/api/emails')
      .then(emails => this.setState({ emails: emails.data }))
      .catch(err => console.error(err))
  }

  render () {
    return (
      <div>
        <p className='center'>Lists each email address along with the owners name.</p>
        <table className='table table-striped table-hover'>
          <thead>
            <tr>
              <th>#</th>
              <th>Email Address</th>
              <th>Owner Name</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.emails.map((email, idx) =>
                <tr key={email.id}>
                  <td>{idx}</td>
                  <td>{email.address_text}</td>
                  <td>{email.person.name}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}
