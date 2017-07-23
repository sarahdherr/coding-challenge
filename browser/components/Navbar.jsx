import React from 'react'
import { Link } from 'react-router'

export default (props) =>
  <nav className='navbar navbar-default'>
    <ul className='nav navbar-nav'>
      <li><Link to='/messages'>1. Messages</Link></li>
      <li><Link to='/pond'>2. Golden Pond</Link></li>
    </ul>
  </nav>
