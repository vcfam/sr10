import React from 'react'
import { Link } from "@reach/router";

export default function Nav({language}) {

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

  return (
    <nav>
      <ul>
          <li><Link to="#">{menu.anniversary[language]}</Link></li>
          <li><Link to="#">{menu.venue[language]}</Link></li>
          <li>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScVQR1vsUgzYi7xCA2InyA8dAzMRGkMTM1h6uOFKRQ8zVCvDg/viewform?usp=sf_link">
              {menu.rsvp[language]}                    
            </a>
          </li>
          <li><Link to="/travel">{menu.travel[language]}</Link></li>
      </ul>
    </nav>
  )
}