import React from 'react'

import pic01 from '../../images/pic01.jpg'

class Anniversary extends React.Component {
  render() {
    return (
      <>
        <h2 className="major">L'anniversario</h2>
        <span className="image main"><img src={pic01} alt="" /></span>
        <p>Our story / Why we are doing this.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
      </>
    )
  }
}

export default Anniversary