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
      it: `location e hotel`
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

const next = {
  en: `POSTPONED`,
  it: `RIMANDATO`
}

const nextInfo = {
  en: `Details to come. For questions: `,
  it: `a data da destinarsi. Per informazioni: `,
}

const Header = ({language, isMain}) => {
  const content = isMain 
    ? (<div className="content">
        <div className="inner">
          <h1>Seth + Raff 10</h1>
          <h1>— {next[language]} —</h1>
          <p>{nextInfo[language]}  <a href="mailto:sethandraff@gmail.com">sethandraff@gmail.com</a></p>
          {/* <p>{subtitle[language ]}</p> */}
        </div>
    </div>)
    : ''
  return (    
    <header id="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="westie logo"/>
        </Link>
      </div>
      {content}      
      {/* <nav>
        <ul>
            <li><Link to={`/anniversary#${language}`}>{menu.anniversary[language]}</Link></li>
            <li><Link to={`/venue#${language}`}>{menu.venue[language]}</Link></li>              
            <li><Link to={`/travel#${language}`}>{menu.travel[language]}</Link></li>
            <li><Link to={`/rsvp#${language}`}>{menu.rsvp[language]}</Link>
            </li>
        </ul>
      </nav> */}
    </header>
)}

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  language: PropTypes.string
}

export default Header
