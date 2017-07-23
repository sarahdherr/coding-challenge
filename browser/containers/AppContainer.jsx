import React from 'react'
import Navbar from '../components/Navbar.jsx'

export default (props) =>
  <div>
    <Navbar />
    {
      props.children
    }
  </div>
