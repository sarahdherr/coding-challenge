import React from 'react'

function validEndpoint (duck) {
  if (duck.orientation) return `${duck.coordinates[0]} ${duck.coordinates[1]} ${duck.orientation}`
  return 'Invalid input'
}

export default ({duck1, duck2}) =>
  <div>
    <h3 className='pond-padding'>Output:</h3>
    <h4 className='center'><strong>Duck 1 End:</strong> {validEndpoint(duck1)}</h4>
    <h4 className='center'><strong>Duck 2 End:</strong> {validEndpoint(duck2)}</h4>
  </div>
