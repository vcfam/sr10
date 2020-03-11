import React from 'react'
import Article from './Article'

import RsvpEN from './sections/en/Rsvp'
import RsvpIT from './sections/it/Rsvp'

function RsvpPage ({location}) {
  let content = <RsvpEN/>
  if (location.hash.match(/it$/)) {
    content = <RsvpIT/>
  }
  return (
    <Article location={location}>
      <article className="active">
        {content}
      </article>
    </Article>
  )
}

export default RsvpPage
