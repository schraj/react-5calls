import React, { PropTypes } from 'react'

class Outcomes extends React.Component {
  outcomeClick = (result) => {
    if (!result) {
      this.props.onSubmitOutcome('skipCall', { issueid: this.props.issue.id });
    } else {
      this.props.onSubmitOutcome('callComplete', { result: result, contactid: this.props.currentContact.id, issueid: this.props.issue.id });
    }
  }

  render() {
    return (
      <div>
        {this.props.currentContact &&
            <div className="call__outcomes">
              <h3 className="call__outcomes__header">Enter your call result to get the next call:</h3>
              <div className="call__outcomes__items">
                <button onClick={() => this.outcomeClick('unavailable')}>Unavailable</button>
                <button onClick={() => this.outcomeClick('vm')}>Left Voicemail</button>
                <button onClick={() => this.outcomeClick('contacted')}>Made Contact</button>
                <button onClick={() => this.outcomeClick()}>Skip</button>
              </div>
              {this.props.numContactsLeft > 0 &&
                <h3 aria-live="polite" className="call__contacts__left" >There are {this.props.numContactsLeft} call left to make.</h3>
              }
            </div>
        }
      </div>
    )
  }
}

Outcomes.propTypes = {
  currentContact: PropTypes.any.isRequired,
  issue: PropTypes.any.isRequired,
  numContactsLeft: PropTypes.number.isRequired,
  onSubmitOutcome: PropTypes.func.isRequired
}

export default Outcomes
