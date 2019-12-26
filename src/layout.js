import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './assets/scss/main.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
      </Helmet>
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
