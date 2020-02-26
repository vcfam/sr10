import React from 'react'

import pic01 from '../../assets/images/CollageWed.png'

class Anniversary extends React.Component {
  render() {
    return (
      <>
        <h2 className="major">Anniversary</h2>
        <span className="image main"><img src={pic01} alt="" /></span>
        <p>In 2010 we celebrated our union in a small, intimate ceremony. In 2020, we would like to celebrate with all our friends and family.</p>
        
        <h3>Weekend Events</h3>
        <p>Friday 4 September: 8pm optional casual dinner at Castello Orsini</p>
        <p>Saturday 5 September: 5pm vow renewal, followed by reception into the evening.</p>
        <p>Sunday 6 September: 1pm casual lunch, followed by (€28) optional local wine and olive oil tasting.</p>
        <p>Coach bus service will be provided on Saturday from the local train station to the hotel/castle, and it will be provided on Sunday afternoon from the castle to the train station.</p>
        <p>Hotel facilities include a pool and jacuzzi. Feel free to bring swimming attire.</p>

        <h3>Dress Code</h3>
        <p>Foremost, dress to enjoy the evening! If you have particular considerations 
          that need attention in order to enjoy the anniversary event comfortably over 5-6 hours, 
          definitely follow your instinct. Otherwise, typical wedding attire is appropriate. 
          Black tie optional, bow ties always appreciated.</p>

        <h3>Children</h3>
        <p>Children of guests are very welcome to join in on the fun! Please be aware, though, that we will not have child minders or specific childcare facilities. So parents will continue to be parents over the weekend!</p>


        <h3>Social Media Guidelines</h3>
        <p>Social media is great!</p>
        <p>No rules or guidelines. Feel free to make your grandmother blush and giggle.</p>
        <p>If you would like to use a hashtag, we would suggest:<br/><code>#dieciannifa</code> and <code>#sethandraff10</code></p>
      </>
    )
  }
}

export default Anniversary