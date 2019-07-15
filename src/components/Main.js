import React from 'react'
import PropTypes from 'prop-types'

import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

import Anniversary_EN from '../sections/en/Anniversary'
import Anniversary_IT from '../sections/it/Anniversary'

import Venue_EN from '../sections/en/Venue'
import Venue_IT from '../sections/it/Venue'

import Travel_EN from '../sections/en/Travel'
import Travel_IT from '../sections/it/Travel'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>
    const anniversary = this.props.language === 'en' ? <Anniversary_EN/> : <Anniversary_IT/>
    const venue = this.props.language === 'en' ? <Venue_EN/> : <Venue_IT/>
    const travel = this.props.language === 'en' ? <Travel_EN/> : <Travel_IT/>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="anniversary" className={`${this.props.article === 'anniversary' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          {anniversary}
          {close}
        </article>

        <article id="venue" className={`${this.props.article === 'venue' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          {venue}
          {close}
        </article>

        <article id="travel" className={`${this.props.article === 'travel' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          {travel}
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired
}

export default Main