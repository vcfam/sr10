import React from 'react'
import { Link } from "@reach/router";
import PropTypes from 'prop-types'
import Nav from './Nav'

const subtitle = {
  en: `Join Seth and Raff for their 10th anniversary celebration`,
  it: `Partecipa al 10º anniversario di Seth and Raff`
}

const Header = ({timeout, language, isMain}) => {
  const content = isMain 
    ? (<div className="content">
        <div className="inner">
            <h1>Seth + Raff 10</h1>
            <p>{subtitle[language ]}</p>
        </div>
    </div>)
    : ''
  return (
    <header id="header" style={timeout ? {display: 'none'} : {}}>
        <div className="logo">
          <Link to="/site" style={{borderStyle: 'none'}}><span className="icon fa-diamond"></span></Link>
        </div>
        {content}
        <Nav language={language}/>
    </header>
)}

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
  language: PropTypes.string
}

export default Header
