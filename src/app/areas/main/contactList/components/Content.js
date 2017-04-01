import React, { PropTypes } from 'react'
import Call from './Call'
import Hypothesis from './Hypothesis'
import About from './About'

const getContent = (issues, uiState) => {
  if (issues.length > 0) {
    return <Call issue={issues[0]} uiState={uiState} />
  } else {
    return <About />
  }
}

const Content = ({ issues, uiState }) => (
  <main id="content" role="main" aria-live="polite" className="layout__main">
    {getContent(issues, uiState)}
  </main>
)

Content.propTypes = {
  issues: PropTypes.any.isRequired,
  uiState: PropTypes.any.isRequired
}

export default Content
