import React from 'react'
import { Router } from "@reach/router"
import PrivateRoute from "../components/privateRoute"
import Login from './Login'
import IndexPage from './Site'

class App extends React.Component {
  render() {
    return (
      <Router>
        <PrivateRoute path="/site" component={IndexPage} />
        <Login path="/"/>
      </Router>)
  }
}

export default App
