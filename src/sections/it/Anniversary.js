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
        
        <h3>Programma</h3>
        <p>Venerdì 4 Settembre: 20:00 cena informale (opzionale) al Castello Orsini.</p>
        <p>Sabato 5 Settembre: 17:00 rinnovo promesse, seguito da ricevimento e cena.</p>
        <p>Domenica 6 Settembre: 13:00 pranzo informale, seguito da degustazione di vini e olii d’oliva locali (€28 a persona).</p>
        <p>Sabato Ci sarà un pullman organizzato dalla stazione dei treni all’hotel/castello, e un secondo pullman domenica pomeriggio dal castello alla stazione.</p>
        <p>L’hotel ha una piscina e vasca idromassaggio, quindi se volete portate il costume!</p>

        <h3>All’evento</h3>
        <p>Consigliamo di vestirvi come per un matrimonio! Tenete conto del fatto che il castello ha scale e sampietrini.</p>

        <h3>Bambini</h3>
        <p>I bambini sono benvenuti all’evento! Tenete conto, però, che non si saranno servizi specializzati per cui i genitori dovranno prendersene cura come al solito.</p>

        <h3>Uso dei social</h3>
        <p>Nessuna regola particolare, divertitevi e postate pure! Suggeriamo l’uso degli hashtag:
        <br/><code>#dieciannifa</code> e <code>#sethandraff10</code></p>
      </>
    )
  }
}

export default Anniversary