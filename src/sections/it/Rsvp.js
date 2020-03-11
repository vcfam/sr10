import React from 'react'

class Rsvp extends React.Component {
  render() {
    return (
      <>
        <h2 className="major">RSVP</h2>
        <p>Grazie a chi ha già risposto! Per chi avesse bisogno di più tempo, abbiamo esteso la scadenza per rispondere all'invito al 31 Maggio 2020!</p>
        <p>Se avete domande, dubbi, commenti, scrivete a <a href="mailto:sethandraff@gmail.com">sethandraff@gmail.com</a>.</p>
        <p/>
        <p style={{textAlign: 'center'}}><strong><a href="https://docs.google.com/forms/d/e/1FAIpQLScVQR1vsUgzYi7xCA2InyA8dAzMRGkMTM1h6uOFKRQ8zVCvDg/viewform">Clicca qui per accedere al modulo RSVP.</a></strong></p>
      </>
    )
  }
}

export default Rsvp