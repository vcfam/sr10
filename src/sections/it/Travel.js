import React from 'react'

import map1 from '../../assets/images/map1.png'
import map2 from '../../assets/images/map2.png'

class Travel extends React.Component {
  render() {
    return (
      <>
        <h2 className="major">Come Arrivare</h2>
        <h3>In macchina</h3>
        <p>Si può parcheggiare nel fossato del castello. Una volta arrivati, citofonate al cancello per farvi aprire.</p>
        <h3>Pullman</h3>
        <p>Organizzeremo degli autobus dalla stazione dei treni più vicina: Fara Sabina a cui è possibile arrivare a Fara 
          Sabina con il treno da Roma Tiburtina o da Fiumicino. Gli autobus saranno disponibili Sabato pomeriggio e 
          Domenica pomeriggio. Organizzeremo anche un pullman Sabato sera per riportare all’hotel gli ospiti che non resteranno al Castello Orsini.
          Aggiungeremo ulteriori dettagli nei prossimi mesi. Scrivete pure se avete domande.</p>
        <p>Se fosse necessario, il Castello Orsini può organizzare trasferimenti su richiesta tra la stazione e il 
          castello per €54.</p>
        <h3>Dall’aeroporto di Fiumicino</h3>
        <p>C’è un treno diretto dall’aeroporto a Fara Sabina: Trenitalia REG 22001 direzione Orte. Sono 17 fermate e 
          ci mette un’ora e mezza.</p>
        <img src={map1} alt="train map from FCO to Fara Sabina" />
        <h3>Da Roma</h3>
        <p>Da Roma Tiburtina prendete il TrenItalia REG 21720 direzione Poggio Mirteto. Sono 7 fermate fino Fara Sabina e 
          ci mette circa 40 minuti.</p>
        <img src={map2} alt="train map from Rome to Fara Sabina" />
        <h3>Da Fara Sabina (autobus Cotral)</h3>
        <p>C’è un autobus <a href="https://www.cotralspa.it/">Cotral</a> tra la stazione di Fara Sabina a Nerola, più meno ogni ora, ma non sappiamo quanto sia affidabile! Aggiungeremo ulteriori dettagli quando verranno pubblicati gli orari per Settembre.</p>
        <p>In caso di ritardi, chiamate il Castello Orsini o uno di noi per farvi venire a prendere. 
          (Aggiungeremo ulteriori informazioni)</p>
      </>
    )
  }
}

export default Travel