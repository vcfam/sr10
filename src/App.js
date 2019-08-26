import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import PrivateRoute from './privateRoute'
import Login from './login'
import IndexPage from './home'
import TravelPage from './travel'
import AnniversaryPage from './anniversary'
import VenuePage from './venue'

function App() {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/" component={IndexPage} />
      <PrivateRoute path="/travel" component={TravelPage} />
      <PrivateRoute path="/anniversary" component={AnniversaryPage} />
      <PrivateRoute path="/venue" component={VenuePage} />
    </Router>
  )
}

export default App;
