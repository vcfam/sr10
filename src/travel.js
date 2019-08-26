import React from 'react'
import Article from './Article'

import TravelEN from './sections/en/Travel'
import TravelIT from './sections/it/Travel'

export default class TravelPage extends React.Component {
  render() {
    let content = <TravelEN/>
    if (this.props.location.hash.match(/it$/)) {
      content = <TravelIT/>
    }
    return (
      <Article location={this.props.location}>
        <article className="active">
          {content}
        </article>
      </Article>
    )
  }
}
