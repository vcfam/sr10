import React from 'react'

import pic01 from '../../assets/images/CollageWed.png'

class Anniversary extends React.Component {
  render() {
    return (
      <>
        <h2 className="major">L'anniversario</h2>
        <span className="image main"><img src={pic01} alt="" /></span>
        <p>Nel 2010 abbiamo celebrato la nostra unione con una cerimonia piccola e intima.
          In occasione del nostro decimo anniversario vorremmo festeggiare con tutti i nostri amici e parenti.</p>
        
        <h3>All’evento</h3>
        <p>Consigliamo di vestirvi come per un matrimonio! Tenete conto del fatto che il castello ha scale e sampietrini.</p>

        <h3>Uso dei social</h3>
        <p>Nessuna regola particolare, divertitevi e postate pure! Suggeriamo l’uso degli hashtag:
        <br/><code>#dieciannifa</code> e <code>#sethandraff10</code></p>
      </>
    )
  }
}

export default Anniversary