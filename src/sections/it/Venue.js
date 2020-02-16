import React from 'react'
import { Link } from "react-router-dom"

import orsini from '../../assets/images/orsini.jpg'

class Venue extends React.Component {
  render() {
    return (
      <>
        <h2 className="major">Location e hotel</h2>
        <span className="image main"><img src={orsini} alt="veduta del castello Orsini" /></span>
        <p>L’anniversario avrà luogo al Castello Orsini a Nerola (Roma). La data è il 5 Settembre 2020 (Sabato), 
          ma restate pure per l’intero fine settimana se volete! Per maggiori dettagli si veda 
          “<Link to="/anniversary#it">L’anniversario</Link>”.</p>
        
        <h3>Dove alloggiare</h3>
        <p>Se voleste restare a dormire, vi consigliamo di stare proprio alla location, il <a href="https://www.castellorsini.it">Castello 
        Orsini</a>. Però c’è un numero limitato di stanze, quindi se foste interessati, fatecelo sapere nel modulo di risposta 
        e ci metteremo in contatto con voi direttamente. Tenete anche conto che il castello è antico e anche se le camere sono 
        confortevoli, non sono al livello di un hotel di lusso. Ogni camera ha il proprio bagno e aria condizionata. Le camere 
        sono €90 a notte, e un terzo letto può essere aggiunto in parecchie camere per €40 extra. Ci sono alcune camere ampie 
        con un soppalco, con il letto sopra e un salotto sotto che può essere attrezzato con un letto a doppia piazza. Se due 
        coppie o amici volessero condividere una di queste stanze, fatecelo sapere o chiedeteci ulteriori informazioni. 
        Questo ci aiuterebbe anche a massimizzare il numero di ospiti al castello. Stiamo ancora cercando un hotel alternativo 
        nelle vicinanze, quindi tenete d’occhio il sito per ulteriori informazioni.</p>
      </>
    )
  }
}

export default Venue