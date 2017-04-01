import React, { PropTypes } from 'react'
import ScriptLine from './ScriptLine'
import Script from './Script'
import Outcomes from './Outcomes'
import Contact from './Contact'
import NoContact from './NoContact'

const getContactArea = (issue) => {
  let currentContact = issue.contacts[0];
  if (currentContact != null) {
    return Contact(currentContact)
  } else {
    return NoContact()
  }
}

const Call = ({ issue, uiState }) => (
  <section className="call">
    <header className="call__header">
      <h2 className="call__title">{issue.name}</h2>
      <div className="call__reason">{issue.reason.split('\n').map((line) => ScriptLine(line))}</div>
    </header>

    {getContactArea(issue)}

    {Script(issue)}

    {Outcomes(issue.contacts[0], true)}

    {/*${promote(state, prev, send)}*/}

  </section>
)

Call.propTypes = {
  issue: PropTypes.any.isRequired,
  uiState: PropTypes.any.isRequired
}

export default Call
