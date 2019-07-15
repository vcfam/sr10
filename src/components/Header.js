import React from 'react'
import PropTypes from 'prop-types'

const subtitle = {
    en: `Join Seth and Raff for their 10th anniversary celebration`,
    it: `Partecipa al 10º anniversation di Seth and Raff`
}

const menu = {
    anniversary: {
        en: `anniversary`,
        it: `l'anniversario`
    },
    venue: {
        en: `venue`,
        it: `location`
    },
    rsvp: {
        en: `RSVP`,
        it: `Rispondi all'invito`
    },
    travel: {
        en: `travel`,
        it: `come arrivare e alloggio`
    }
}

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Seth + Raff 10</h1>
                <p>{subtitle[props.language ]}</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('anniversary')}}>
                    {menu.anniversary[props.language]}
                </a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('venue')}}>
                    {menu.venue[props.language]}
                </a></li>
                <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScVQR1vsUgzYi7xCA2InyA8dAzMRGkMTM1h6uOFKRQ8zVCvDg/viewform?usp=sf_link">
                    {menu.rsvp[props.language]}                    
                </a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('travel')}}>
                    {menu.travel[props.language]}    
                </a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool,
    language: PropTypes.string
}

export default Header
