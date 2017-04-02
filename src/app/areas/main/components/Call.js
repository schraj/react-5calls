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
    this.setIssue(props);
  }

  setIssue = (props) => {
    const issue = props.issues.find((i) => { return i.id === props.uiState.currentIssueId });
    this.state = {issue: issue};

    console.log("setting issue: %o", issue)
  }
  componentWillReceiveProps(newProps) {
    console.log("will receive props")
    console.log("newProps: %o", newProps)

    this.setIssue(newProps);    
  }

  shouldComponentUpdate(newProps, newState) {
    console.log("should update")
    console.log("newProps: %o", newProps)
    console.log("newState: %o", newState)
    return true;
  }

  componentWillUpdate(newProps, newState) {
    console.log("will update")
    console.log("newProps: %o", newProps)
    console.log("newState: %o", newState)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("did update")
    console.log("prevProps: %o", prevProps)
    console.log("prevState: %o", prevState)
  }

  componentWillMount() {
    console.log("will mount")
  }

  componentDidMount() {
    console.log("did mount")
  }


  render() {
   return (
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
