import React from 'react'

export default (props) =>
  <div>
    <h3 className='pond-padding'>Directions:</h3>
    <p className='pond-padding'>This is a simulation of ducks on a curiously rectuanglar pond. A duck's position and location is represented by a combination of x and y coordinates and a letter representing one of 4 cardinal compass points. The pond is divided up into a grid to simplify naviagtion. An example position might be 0, 0, N, which means the duck is in the bottom left corner and facing North.</p>
    <p className='pond-padding'>In order to control a duck, you send a simple string of letters. The possible letters are 'P', 'S', and 'F'. 'P' and 'S' makes the duck spin 90 degrees toward port side (left) or starboard (right) respectively, without moving from its current spot. 'F' means move forward oen grid point, and maintain the same heading.</p>
  </div>
