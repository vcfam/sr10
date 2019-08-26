import React from "react"
import { handleLogin, isLoggedIn } from "./services/auth"
import {Redirect} from "react-router-dom"
import Layout from './layout'

import logo from './assets/images/logo.svg'

class Login extends React.Component {
  state = {
    password: ``,
    error: false,
    success: false
  }
  handleUpdate = event => {
    this.setState({
      password: event.target.value,
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    const success = handleLogin(this.state.password)
    if (isLoggedIn()) {
      this.setState({success: true})
    }
    if (!success) {
      this.setState({error: true})
    }
  }
  render() {
    let error
    if (this.state.error) {
      error = <span>Wrong Password.</span>
    }
    if (isLoggedIn()) {
      this.setState({success: true})
    }
    if (this.state.success) {
      return <Redirect to={{ pathname: "/" }} />
    }
    return (
      <Layout>
        <div className="body">
          <div id="wrapper">
            <header id="header">
              <div className="logo">
                <img src={logo} alt="westie logo" style={{width: '80px', marginTop: '16px'}}/>
              </div>
              <div className="content">
                  <div className="inner">
                    <h1>Seth + Raff 10</h1>
                      <form
                        method="post"
                        onSubmit={event => {
                          this.handleSubmit(event)
                        }}
                      >
                        <label>
                          Password
                          <input
                            type="password"
                            name="password"
                            onChange={this.handleUpdate}
                          />
                        </label>
                        <input type="submit" value="Log In" style={{backgroundColor: '#302E31'}}/>
                      </form>
                      {error}
                  </div>
              </div>
            </header>
          </div>
          <div id="bg"></div>
        </div>
      </Layout>
    )
  }
}
export default Login