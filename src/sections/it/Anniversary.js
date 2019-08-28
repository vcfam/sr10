import React from 'react'

import pic01 from '../../assets/images/CollageWed.png'

class Anniversary extends React.Component {
  render() {
    return (
      <>
        <h2 className="major">L'anniversario</h2>
        <span className="image main"><img src={pic01} alt="" /></span>
      </>
    )
  }
}

export default Anniversary