import React from 'react'

import orsini from '../../assets/images/orsini.jpg'

class Venue extends React.Component {
  render() {
    return (
      <>
        <h2 className="major">Venue and Accommodation</h2>
        <span className="image main"><img src={orsini} alt="view of Orsini castle" /></span>
        <p>The anniversary celebration will take place at Castello Orsini in Nerola. The anniversary will take place on Saturday
          the 5th of September, but feel free to join for the weekend. More info on the specific agenda coming soon!
        </p>
        
        <h3>Lodging</h3>
        <p>We encourage utilizing room blocks that have been reserved at the venue itself, <a href="https://www.castellorsini.it/en/home">Castello
          Orsini</a>, however there is a limited number of rooms available. If you’re interested in staying in the castle,
          please indicate so in the RSVP form and we’ll get in touch and do
          our best to accommodate you. Also keep in mind that the castle is centuries old; the rooms are comfortable and have
          the amenities of a good hotel, but cannot match the luxury level of a modern hotel. Stay for the historical charm!
          Each room is en suite and has air conditioning. The rooms are €90 per night, and a third bed can be added to most
          rooms for an extra €40. There are a number of rooms that are designed with a mezzanine sleeping area above and a 
          lounge area below, which can be an additional sleeping area. If couples or close friends want to share a room, do 
          let us know or ask for more information. This will also help maximize castle capacity for guests. We are locating 
          another convenient hotel nearby. Check again in the next few months for more details.</p>
      </>
    )
  }
}

export default Venue