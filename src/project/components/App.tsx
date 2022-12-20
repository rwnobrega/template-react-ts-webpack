import _ from 'lodash'

import React from 'react'

export default function (): JSX.Element {
  const title = _.join(['Hello', 'World!'], ' ')
  return (
    <div>
      <h1>{title}</h1>
      <p>It's working.</p>
    </div>
  )
}
