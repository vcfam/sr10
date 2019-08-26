import React from 'react'

import map1 from '../../assets/images/map1.png'
import map2 from '../../assets/images/map2.png'
import map3 from '../../assets/images/map3.png'

class Travel extends React.Component {
  render() {
    return (
      <>
        <h2 className="major">Come Arrivare</h2>
        <p>N.B. Rideshare apps are not available in this area of Italy.</p>
        <h3>From Fiumicino Airport</h3>
        <p>There is a direct train to Fara Sabina from Rome's Fiumicino Airport. Take the Trenitalia REG 22001
          travelling towards Orte. There will be 17 stops and the trip time is about 1hr 30mins.</p>
        <p>There is no further public transport from Fara Sabina to the venue. See below for more details.</p>
        <img src={map1} alt="train map from FCO to Fara Sabina" />
        <h3>From Rome</h3>
        <p>Depart from Roma Tiburtina station and take the TrenItalia REG 21720 train towards Poggio Mirteto.
          There will be 7 stops and travel time is approximately 40 minutes.</p>
        <p>There is no further public transport from Fara Sabina to the venue. See below for more details.</p>
        <img src={map2} alt="train map from Rome to Fara Sabina" />
        <h3>From Fara Sabina</h3>
        <p>There is no public transport from the train station in Fara Sabina to Nerola and Castello Orsini.</p>
        <p>Taxis are generally available at the train station of Fara Sabina. 
          Travel time to Castello Orsini in Nerola is roughly 20 minutes.</p>
        <p>If taxis are not available at the train station a first bet would be to contact your hotel 
          (Castello Orsini or Antica Corte del Castello in Fiano Romano), as they should be able to assist you. 
          However, you can directly contact taxi companies in the local area including (coming soon...)</p>
        <img src={map3} alt="car ride map from Fara Sabina to Castello Orsini" />
        <h3>By Car</h3>
        <p>Parking info coming soon...</p>
      </>
    )
  }
}

export default Travel