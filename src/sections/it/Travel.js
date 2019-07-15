import React from 'react'

import pic01 from '../../images/pic01.jpg'

class Travel extends React.Component {
  render() {
    return (
      <>
        <h2 className="major">Come Arrivare e Alloggio</h2>
        <span className="image main"><img src={pic01} alt="" /></span>
        <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
      </>
    )
  }
}

export default Travel