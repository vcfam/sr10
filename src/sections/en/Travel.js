import React from 'react'

import map1 from '../../assets/images/map1.png'
import map2 from '../../assets/images/map2.png'
import map3 from '../../assets/images/map3.png'

class Travel extends React.Component {
  render() {
    return (
      <>
        <h2 className="major">Travel</h2>
        <p>N.B. Rideshare apps are not available in this area of Italy.</p>

        <h3>By Car</h3>
        <p>For those with a car or rental car, there is plenty of room to park in the castle moat. Upon arrival, 
          there is an intercom at the gate. Press the buzzer to be let in. Cars will give guests the greatest 
          flexibility in travel.</p>
        <h3>Coach Transport</h3>
        <p>For those who will benefit from transport options, we will run a coach shuttle between the local 
          train station (Fara Sabina) and Castello Orsini Saturday afternoon and Sunday afternoon; the coach will
          also take guests not staying at Orsini back to the second hotel Saturday evening. You can reach
          Fara Sabina direct from Fiumicino Airport and Rome. We will post transport times in the coming months. 
          Do get in touch with us if you have questions.</p>
        <p>Castello Orsini can arrange private transfers between the castle and the train station. These transfers cost €54.</p>

        <h3>From Fiumicino Airport</h3>
        <p>There is a direct train to Fara Sabina from Rome's Fiumicino Airport. Take the Trenitalia REG 22001
          travelling towards Orte. There will be 17 stops and the trip time is about 1hr 30mins.</p>
        <img src={map1} alt="train map from FCO to Fara Sabina" />
        <h3>From Rome</h3>
        <p>Depart from Roma Tiburtina station and take the TrenItalia REG 21720 train towards Poggio Mirteto.
          There will be 7 stops and travel time is approximately 40 minutes.</p>
        <p>There is no further public transport from Fara Sabina to the venue. See below for more details.</p>
        <img src={map2} alt="train map from Rome to Fara Sabina" />
        
        <h3>From Fara Sabina</h3>
        <p>There is a <a href="https://www.cotralspa.it/">Cotral</a> bus from  from the train station in Fara Sabina to Nerola, followed by a 10 minute walk to Castello Orsini. This option definitely requires some planning: buses run about every hour, but they may not always be on time. Tickets will need to be purchased in advance and drivers will likely not speak English. We will add more details on how to navigate the bus system closer to the event when the September timetables will be released.</p>
        <p>In case you are delayed and need transport, call Castello Orsini or one of us to arrange transport. 
          (More info and numbers coming soon)</p>
      </>
    )
  }
}

export default Travel