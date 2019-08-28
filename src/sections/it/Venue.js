import React from 'react'

import orsini from '../../assets/images/orsini.jpg'

class Venue extends React.Component {
  render() {
    return (
      <>
        <h2 className="major">Location e hotel</h2>
        <span className="image main"><img src={orsini} alt="veduta del castello Orsini" /></span>
        
      </>
    )
  }
}

export default Venue