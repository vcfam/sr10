import React from 'react'
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

import logo from './assets/images/logo.svg'

const subtitle = {
  en: `Join Seth and Raff for their 10th anniversary celebration`,
  it: `Partecipa al 10º anniversario di Seth and Raff`
}

const menu = {
  anniversary: {
      en: `anniversary`,
      it: `l'anniversario`
  },
  venue: {
      en: `venue`,
      it: `location e alloggio`
  },
  rsvp: {
      en: `RSVP`,
      it: `Rispondi all'invito`
  },
  travel: {
      en: `travel`,
      it: `come arrivare`
  }
}

const Header = ({language, isMain}) => {
  const content = isMain 
    ? (<div className="content">
        <div className="inner">
            <h1>Seth + Raff 10</h1>
            <p>{subtitle[language ]}</p>
        </div>
    </div>)
    : ''
  return (
    <header id="header">
        <div className="logo">
          <Link to="/" style={{borderStyle: 'none'}}>
            <img src={logo} alt="westie logo" style={{width: '80px', marginTop: '16px'}}/>
          </Link>
        </div>
        {content}
        <nav>
          <ul>
              <li><Link to={`/anniversary#${language}`}>{menu.anniversary[language]}</Link></li>
              <li><Link to={`/venue#${language}`}>{menu.venue[language]}</Link></li>              
              <li><Link to={`/travel#${language}`}>{menu.travel[language]}</Link></li>
              <li>
                <a href="#">
                  {menu.rsvp[language]}                    
                </a>
              </li>
          </ul>
        </nav>
    </header>
)}

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  language: PropTypes.string
}

export default Header
