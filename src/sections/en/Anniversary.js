import React from 'react'

import pic01 from '../../assets/images/CollageWed.png'

class Anniversary extends React.Component {
  render() {
    return (
      <>
        <h2 className="major">Anniversary</h2>
        <span className="image main"><img src={pic01} alt="" /></span>
        <p>More info coming soon!</p>
        
        <h3>Dress Code</h3>
        <p>Foremost, dress to enjoy the evening! If you have particular considerations 
          that need attention in order to enjoy the anniversary event comfortably over 5-6 hours, 
          definitely follow your instinct. Otherwise, typical wedding attire is appropriate. 
          Black tie not necessary, bow ties always appreciated.</p>

        <h3>Social Media Guidelines</h3>
        <p>Social media is great!</p>
        <p>No rules or guidelines. Feel free to make your grandmother blush and giggle.</p>
        <p>If you would like to use a hashtag, we would suggest:<br/><code>#dieciannifa</code> and <code>#sethandraff10</code></p>
      </>
    )
  }
}

export default Anniversary