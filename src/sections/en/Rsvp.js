import React from 'react'

class Rsvp extends React.Component {
  render() {
    return (
      <>
        <h2 className="major">RSVP</h2>
        <p>Thanks for those that have already RSVPd. If anyone needs more time, please note we have extended the deadline to May 31<sup>st</sup> 2020!</p>
        <p>If you have any questions or concerns, please reach out to us at <a href="mailto:sethandraff@gmail.com">sethandraff@gmail.com</a></p>
        <p/>
        <p style={{textAlign: 'center'}}><strong><a href="https://docs.google.com/forms/d/e/1FAIpQLScVQR1vsUgzYi7xCA2InyA8dAzMRGkMTM1h6uOFKRQ8zVCvDg/viewform">Click here to access the RSVP form.</a></strong></p>
      </>
    )
  }
}

export default Rsvp