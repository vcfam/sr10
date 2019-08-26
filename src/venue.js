import React from 'react'
import Article from './Article'

import VenueEN from './sections/en/Venue'
import VenueIT from './sections/it/Venue'

function VenuePage ({location}) {
  let content = <VenueEN/>
  if (location.hash.match(/it$/)) {
    content = <VenueIT/>
  }
  return (
    <Article location={location}>
      <article className="active">
        {content}
      </article>
    </Article>
  )
}

export default VenuePage
