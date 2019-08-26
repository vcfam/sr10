import React from 'react'

import orsini from '../../assets/images/orsini.jpg'

class Venue extends React.Component {
  render() {
    return (
      <>
        <h2 className="major">Location e alloggio</h2>
        <span className="image main"><img src={orsini} alt="veduta del castello Orsini" /></span>
        <p>More info coming soon!</p>
        
        <h3>Lodging</h3>
        <p>We encourage utilizing room blocks that have been reserved at the venue itself, 
          <a href="https://www.castellorsini.it/en/home">Castello Orsini</a>, and 
          <a href="https://www.hotels.com/ho677859840/">Antica Corte del Castello</a> in Fiano Romano. 
          However, in Fiano Romano, a little to the south of the town, there are a few other larger hotels 
          (<a href="https://www.bestwestern.com/en_US/book/hotel-rooms.98182.html">Best Western Park Hotel</a>, 
          <a href="https://www.priceline.com/relax/at/2973705">Hotel Palace Inn</a>, and 
          <a href="https://www.hotels.com/ho299803/">Hotel Relax</a>). Smaller lodging venues include a small B&amp;B 
          in Nerola itself, <a href="https://www.trivago.it/nerola-418781/hotel/la-fontana-di-pietra-5883750">La Fontana
          di Pietra</a>, and a few farmhouse B&amp;Bs outside of town, <a href="https://www.priceline.com/relax/at/39225006">
          Agroturismo Il Bagolaro</a>, and <a href="https://www.hotels.com/ho634733536">La Ripa</a>.</p>

        <h3>Social Media Guidelines</h3>
        <p>WE LOVE SOCIAL MEDIA</p>
        <p>No rules or guidelines, you do you. Don't post anything you don't want Vladmir Putin to see, 
          but feel free to post anything that would make your grandmother blush and giggle.</p>
        <p>If you would like to use a hashtag, we would suggest:<br/><code>#dieciannifa</code> and <code>#sethandraff10</code></p>
      </>
    )
  }
}

export default Venue