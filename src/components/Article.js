import React from 'react'
import Layout from './layout'

import Header from './Header'
import Footer_EN from './Footer_en'
import Footer_IT from './Footer_it'

function Article ({children, location}) {
  let language = 'en'
  if (location.hash.match(/it$/)) {
    language = 'it'
  }

  const footer = language === 'en' 
    ? <Footer_EN language={language} />
    : <Footer_IT language={language} />

  return (
    <Layout location={location}>
      <div className="body">
        <div id="wrapper">
          <div className="lang">
              <a href="#it" className="button">IT</a>
              <a href="#" className="button">EN</a>
          </div>
          <div className="alttitle" style={{position: 'absolute', left: '5%'}}>
              <h1>Seth + Raff 10</h1>
          </div>
          <Header language={language}/>
          <div id="main" style={{display: 'flex'}}>
            {children}
          </div>
          {footer}
        </div>
        <div id="bg"></div>
      </div>
    </Layout>
  )
}

export default Article
