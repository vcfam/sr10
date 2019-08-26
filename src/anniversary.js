import React from 'react'
import Article from './Article'

import AnniversaryEN from './sections/en/Anniversary'
import AnniversaryIT from './sections/it/Anniversary'

function AnniversaryPage ({location}) {
  let content = <AnniversaryEN/>
  if (location.hash.match(/it$/)) {
    content = <AnniversaryIT/>
  }
  return (
    <Article location={location}>
      <article className="active">
        {content}
      </article>
    </Article>
  )
}

export default AnniversaryPage
