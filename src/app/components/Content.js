import React, { PropTypes } from 'react'
import Call from './Call'
import Hypothesis from './Hypothesis'
import About from './About'

const getContent = (issues, callState) => {
  if (issues.length > 0) {
    return <Call issue={issues[0]} callState={callState} />
  } else {
    return <About />
  }
}

const Content = ({ issues, callState }) => (
  <main id="content" role="main" aria-live="polite" className="layout__main">
    {getContent(issues, callState)}
  </main>
)

Content.propTypes = {
  issues: PropTypes.any.isRequired,
  callState: PropTypes.any.isRequired
}

export default Content
