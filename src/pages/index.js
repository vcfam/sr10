import React from 'react'
import { Router } from "@reach/router"
import PrivateRoute from "../components/privateRoute"
import Login from './login'
import IndexPage from '../components/home'
import AnniversaryPage from '../components/anniversary'
import TravelPage from '../components/travel'

class App extends React.Component {
  render() {
    return (
      <Router>
        <PrivateRoute path="/site" component={IndexPage} />
        <PrivateRoute path="/site/travel" component={TravelPage} />
        <PrivateRoute path="/site/anniversary" component={AnniversaryPage} />
        <Login path="/"/>
      </Router>)
  }
}

export default App
