import React from 'react'
import Article from './Article'

import RegistryEN from './sections/en/Registry'
import RegistryIT from './sections/it/Registry'

export default class TravelPage extends React.Component {
  render() {
    let content = <RegistryEN/>
    if (this.props.location.hash.match(/it$/)) {
      content = <RegistryIT/>
    }
    return (
      <Article location={this.props.location} giulia={true}>
        <article className="active">
          {content}
        </article>
      </Article>
    )
  }
}
