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
        <h2 className="major">Baby Registry</h2>
        <span className="image main"><img src={giulia} alt="" /></span>
        <p>We are so excited to have our daughter Giulia join our family! We've now closed the registry.</p>

        <p>If you would still like to make a contribution that we use for a later purchase for Giulia, <a href="https://paypal.me/pools/c/8A2UR3u5Gs">please contribute here.</a>
        </p>
      </>
    )
  }
}

export default Anniversary