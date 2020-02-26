import React from 'react'
import Layout from './layout'

import Header from './Header'
import FooterEN from './Footer_en'
import FooterIT from './Footer_it'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: 'is-loading'
    }
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
  }

  render() {
    let language = 'en'
    if (this.props.location.hash.match(/it$/)) {
      language = 'it'
    }

    const footer = language === 'en' 
      ? <FooterEN language={language} />
      : <FooterIT language={language} />

    return (
      <Layout location={this.props.location}>
        <div className={`body ${this.state.loading}`}>
          <div id="wrapper">
            <div className="lang" ref="lang">
                <a href="#it" className="button">IT</a>
                <a href="#" className="button">EN</a>
            </div>
            <Header language={language} isMain={true}/>
            {footer}
          </div>
          <div id="bg"></div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
