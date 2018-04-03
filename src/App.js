import React, { Fragment } from 'react'

const style = `
:host .hello {
  background: #eee;
}
`

export default () => (
  <Fragment>
    <style>{style}</style>
    <div className="hello">Hello World!</div>
  </Fragment>
)
