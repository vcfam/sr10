import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"
import Layout from '../components/layout'

class Login extends React.Component {
  state = {
    password: ``,
    error: false
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
      navigate(`/site`)
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
      navigate(`/site`)
    }
    return (
      <Layout>
        <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
          <div id="wrapper">
            <header id="header">
              <div className="logo">
                  <span className="icon fa-diamond"></span>
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