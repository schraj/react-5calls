import React, { PropTypes } from 'react'
import ScriptLine from './ScriptLine'
import Script from './Script'
import Outcomes from './Outcomes'
import Contact from './Contact'
import NoContact from './NoContact'
import Promote from './Promote'

class Call extends React.Component {
  constructor(props) {
    super(props);
    this.setInitialState(props);
  }

  getIssueFromProps = (props) => {
    return props.issues.find((i) => { return i.id === props.callState.currentIssueId });
  }

  setInitialState = (props) => {
    let issue = this.getIssueFromProps(props);
    let currentContactIndex = 0;
    if (props.callState.contactIndices[props.callState.currentIssueId]) {
      currentContactIndex = props.callState.contactIndices[props.callState.currentIssueId];
    }
    let currentContact = issue.contacts[currentContactIndex];
    let numContactsLeft = issue.contacts.length - currentContactIndex;

    this.state = {
      currentContact: currentContact,
      currentContactIndex: currentContactIndex,
      numContactsLeft: numContactsLeft,
      issue: issue
    }

    console.log("setting initial state: %o", this.state)
  }

  setCurrentState = (newProps) => {
    let currentContactIndex = 0;
    let issue = this.getIssueFromProps(newProps);
    if (newProps.callState.contactIndices[newProps.callState.currentIssueId]) {
      currentContactIndex = newProps.callState.contactIndices[newProps.callState.currentIssueId];
    }
    let currentContact = issue.contacts[currentContactIndex];
    let numContactsLeft = issue.contacts.length - currentContactIndex;

    this.setState({
      currentContact: currentContact,
      currentContactIndex: currentContactIndex,
      numContactsLeft: numContactsLeft,
      issue: issue
    });

    console.log("setting new state: %o", this.state)
  }

  componentWillReceiveProps(newProps) {
    console.log("will receive props")
    console.log("newProps: %o", newProps)

    this.setCurrentState(newProps);
  }

  // shouldComponentUpdate(newProps, newState) {
  //   console.log("should update")
  //   console.log("newProps: %o", newProps)
  //   console.log("newState: %o", newState)
  //   return true;
  // }

  // componentWillUpdate(newProps, newState) {
  //   console.log("will update")
  //   console.log("newProps: %o", newProps)
  //   console.log("newState: %o", newState)
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("did update")
  //   console.log("prevProps: %o", prevProps)
  //   console.log("prevState: %o", prevState)
  // }

  // componentWillMount() {
  //   console.log("will mount")
  // }

  // componentDidMount() {
  //   console.log("did mount")
  // }

  getContactWidget = () => {
    if (this.state.currentContact != null) {
      return <Contact contact={this.state.currentContact} issue={this.state.issue} />
    } else {
      return NoContact(this.props.splitDistrict, this.props.locationInfo, this.props.onEnterLocation)
    }
  }

  render() {
    return (
      <section className="call">
        <header className="call__header">
          <h2 className="call__title">{this.state.issue.name}</h2>
          <div className="call__reason">{this.state.issue.reason.split('\n').map((line) => ScriptLine(line))}</div>
        </header>

        {this.getContactWidget()}

        {this.state.currentContact && 
          Script(this.state.issue)
        }

        {this.state.currentContact && 
          <Outcomes issue={this.state.issue}
          currentContact={this.state.currentContact}
          numContactsLeft={this.state.numContactsLeft}
          onSubmitOutcome={this.props.onSubmitOutcome} />
        }

        <Promote issue={this.state.issue} hasIssue={true} />

      </section>
    )
  }
}

Call.propTypes = {
  issues: PropTypes.any.isRequired,
  callState: PropTypes.any.isRequired,
  splitDistrict: PropTypes.string.isRequired,
  locationInfo: PropTypes.any.isRequired,
  onEnterLocation: PropTypes.func.isRequired,
  onSubmitOutcome: PropTypes.func.isRequired
}

export default Call
