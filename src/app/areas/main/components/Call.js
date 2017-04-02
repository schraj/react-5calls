import React, { PropTypes } from 'react'
import ScriptLine from './ScriptLine'
import Script from './Script'
import Outcomes from './Outcomes'
import Contact from './Contact'
import NoContact from './NoContact'
import Promote from './Promote'

const getContactArea = (issue) => {
  let currentContact = issue.contacts[0];
  if (currentContact != null) {
    return Contact(currentContact)
  } else {
    return NoContact()
  }
}

class Call extends React.Component {
  constructor(props) {
    super(props);
    const issue = props.issues.find((i) => { i.id === props.uiState.currentIssueId });
    this.state = {issue: issue};
  }

  render() {
    (
      <section className="call">
        <header className="call__header">
          <h2 className="call__title">{this.state.issue.name}</h2>
          <div className="call__reason">{this.state.issue.reason.split('\n').map((line) => ScriptLine(line))}</div>
        </header>

        {getContactArea(this.state.issue)}

        {Script(this.state.issue)}

        {Outcomes(this.state.issue.contacts[0], true)}

        <Promote issue={this.state.issue} hasIssue={true} />

      </section>
    )
  }
}

Call.propTypes = {
  issues: PropTypes.any.isRequired,
  uiState: PropTypes.any.isRequired
}

export default Call
