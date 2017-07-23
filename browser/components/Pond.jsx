import React from 'react'
import Pond from '../helper_functions/pond_functions.js'
import PondForm from './PondForm.jsx'
import PondSolution from './PondSolution.jsx'
import PondDirections from './PondDirections.jsx'

export default class PondComp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pond: {},
      duck1: {},
      duck2: {},
      pondInput: '',
      duck1Input: '',
      duck1Move: '',
      duck2Input: '',
      duck2Move: '',
      solution: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handlePondSubmit = this.handlePondSubmit.bind(this)
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handlePondSubmit (evt) {
    evt.preventDefault()

    const pond = new Pond(this.state.pondInput)
    const duck1 = pond.duck(this.state.duck1Input)
    const duck2 = pond.duck(this.state.duck2Input)

    duck1.move(this.state.duck1Move)
    duck2.move(this.state.duck2Move)

    this.setState({ pond, duck1, duck2, solution: !this.state.solution }, () => console.log(this.state))
  }

  render () {
    return (
      <div>
        <h1 className='center'>Golden Pond</h1>
        <PondDirections />
        <PondForm handleChange={this.handleChange} handlePondSubmit={this.handlePondSubmit} />
        {
          this.state.solution
            ? <PondSolution duck1={this.state.duck1} duck2={this.state.duck2} />
            : <div />
        }
      </div>
    )
  }
}
