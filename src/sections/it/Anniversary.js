import React from 'react'

import pic01 from '../../assets/images/pic01.jpg'

class Anniversary extends React.Component {
  render() {
    return (
      <>
        <h2 className="major">L'anniversario</h2>
        <span className="image main"><img src={pic01} alt="" /></span>
        <p>More info coming soon!</p>
        
        <h3>Dress Code</h3>
        <p>Foremost, dress to enjoy the evening! If you have particular considerations 
          that need attention in order to enjoy the anniversary event comfortably over 5-6 hours, 
          definitely follow your instinct. Otherwise, typical wedding attire is appropriate. 
          Black tie not necessary, bow ties appreciated.</p>

        <h3>Social Media Guidelines</h3>
        <p>WE LOVE SOCIAL MEDIA</p>
        <p>No rules or guidelines, you do you. Don't post anything you don't want Vladmir Putin to see, 
          but feel free to post anything that would make your grandmother blush and giggle.</p>
        <p>If you would like to use a hashtag, we would suggest:<br/><code>#dieciannifa</code> and <code>#sethandraff10</code></p>
      </>
    )
  }
}

export default Anniversary