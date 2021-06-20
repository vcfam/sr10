import React from 'react'

import chicco from '../../assets/images/registry/chicco.png'
import pack from '../../assets/images/registry/pack.png'
import brown from '../../assets/images/registry/brown.png'
import lawn from '../../assets/images/registry/lawn.png'
import twig from '../../assets/images/registry/twig.png'
import giulia from '../../assets/images/registry/giuliavc.jpg'

class Anniversary extends React.Component {
  render() {
    return (
      <>
        <h2 className="major">Lista per Giulia</h2>
        <span className="image main"><img src={giulia} alt="" /></span>
        <p>Giulia è arrivata! E si è unita alla nostra famiglia arcobaleno. La lista nascita è stata completata, grazie a tutti!</p>
        <p>Nel caso in cui voleste fare un contributo che possiamo usare per futuri acquisti per Giulia, <a href="https://paypal.me/pools/c/8A2UR3u5Gs">potete contribuire qui.</a>
        </p>
      </>
    )
  }
}

export default Anniversary