import React from 'react'

import orsini from '../../assets/images/orsini.jpg'

class Venue extends React.Component {
  render() {
    return (
      <>
        <h2 className="major">Venue and Lodging</h2>
        <span className="image main"><img src={orsini} alt="view of Orsini castle" /></span>
        <p>The anniversary celebration will take place at Castello Orsini in Nerola. The anniversary will take place on Saturday the 5th of September,
          but feel free to join for the weekend.</p>
        <p>More info on the specific agenda coming soon!</p>
        
        <h3>Lodging</h3>
        <p>We encourage utilizing room blocks that have been reserved at the venue itself, <a href="https://www.castellorsini.it/en/home">Castello
          Orsini</a>. There is also a nearby hotel at the <a href="https://www.hotels.com/ho677859840/">Antica Corte del Castello</a> in Fiano Romano. 
          However, in Fiano Romano, a little to the south of the town, there are a few other larger hotels 
          (<a href="https://www.bestwestern.com/en_US/book/hotel-rooms.98182.html">Best Western Park Hotel</a>, <a href="https://www.priceline.com/relax/at/2973705">Hotel 
          Palace Inn</a>, and <a href="https://www.hotels.com/ho299803/">Hotel Relax</a>). Smaller lodging venues include a small B&amp;B 
          in Nerola itself, <a href="https://www.trivago.it/nerola-418781/hotel/la-fontana-di-pietra-5883750">La Fontana
          di Pietra</a>, and a few farmhouse B&amp;Bs outside of town, <a href="https://www.priceline.com/relax/at/39225006">
          Agroturismo Il Bagolaro</a>, and <a href="https://www.hotels.com/ho634733536">La Ripa</a>.</p>
      </>
    )
  }
}

export default Venue