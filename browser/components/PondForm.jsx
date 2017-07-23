import React from 'react'

export default (props) =>
  <div>
    <h3 className='pond-padding'>Input:</h3>
    <form className='form-container'>
      <div className='form-group'>
        <label className='control-label'>Pond dimensions</label>
        <input className='form-control' type='text' id='inputDefault' placeholder='ie. "5 5"' name='pondInput' onChange={props.handleChange} />
      </div>
      <div className='form-group'>
        <label className='control-label'>Duck 1 position</label>
        <input className='form-control' type='text' id='inputDefault' placeholder='ie. "1 2 N"' name='duck1Input' onChange={props.handleChange} />
      </div>
      <div className='form-group'>
        <label className='control-label'>Duck 1 movement</label>
        <input className='form-control' type='text' id='inputDefault' placeholder='ie. "PFPFPFPFF"' name='duck1Move' onChange={props.handleChange} />
      </div>
      <div className='form-group'>
        <label className='control-label'>Duck 2 position</label>
        <input className='form-control' type='text' id='inputDefault' placeholder='ie. "3 3 E"' name='duck2Input' onChange={props.handleChange} />
      </div>
      <div className='form-group'>
        <label className='control-label'>Duck 2 movement</label>
        <input className='form-control' type='text' id='inputDefault' placeholder='ie. "FFSFFSFSSF"' name='duck2Move' onChange={props.handleChange} />
      </div>
      <div className='center'>
        <button className='btn btn-primary' onClick={props.handlePondSubmit}>Submit</button>
      </div>
    </form>
  </div>
