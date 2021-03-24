import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Home from './components/Home'
import Base from './components/Base'

const App = () => {
  return (
    <Router>
      <div className='d-flex text-center justify-content-around'>
        <Link to='/home'>
          Home
        </Link>
        <Link to='/'>
          Base
        </Link>
      </div>

        <Switch>
          <Route exact path="/">
            <Base />
          </Route>
          <Route path="/home/:name&:lastname">
            <Home />
          </Route>
        </Switch>
    </Router>
  )
}

export default App
