import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import AppContainer from './containers/AppContainer.jsx'
import Messages from './components/Messages.jsx'
import Pond from './components/Pond.jsx'

export default function Root () {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={AppContainer} >
        <Route path='/messages' component={Messages} />
        <Route path='/pond' component={Pond} />
      </Route>
    </Router>
  )
}
