import React, { useState, useEffect } from 'react'
import Layout from './layout'

import Header from './Header'
import FooterEN from './Footer_en'
import FooterIT from './Footer_it'

function Article ({children, location, giulia}) {
  const [loading, setLoading] = useState('is-loading')

  const timeoutId = setTimeout(() => {
    setLoading('')
  }, 100)
  
  useEffect(() => {
    return function cleanup() {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [timeoutId])

  let language = 'en'
  if (location.hash.match(/it$/)) {
    language = 'it'
  }

  const title = giulia ? "Seth + Raff + Giulia" : "Seth + Raff 10"

  const footer = language === 'en' 
    ? <FooterEN language={language} />
    : <FooterIT language={language} />

  return (
    <Layout location={location}>
      <div className={`body ${loading}`}>
        <div id="wrapper">
          <div className="lang">
              <a href="#it" className="button">IT</a>
              <a href="#" className="button">EN</a>
          </div>
          <div className="alttitle">
              <h1>{title}</h1>
          </div>
          <Header language={language} giulia={giulia} />
          <div id="main" className={loading}>
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
