import React, { PropTypes } from 'react'

// const issue = find(state.issues, ['id', state.location.params.issueid]);
// const currentIndex = state.contactIndices[issue.id];
// const currentContact = issue.contacts[currentIndex];

// todo-handle this
const contactsLeft = 4;
const callsPluralization = contactsLeft > 1 ? "people" : "person";
const contactsLeftText = contactsLeft + " more " + callsPluralization + " to call for this issue.";

const outcome = (result) => {
  if (result == null) {
    //send('skipCall', { issueid: issue.id });
  } else {
    //send('callComplete', { result: result, contactid: currentContact.id, issueid: issue.id });
  }
}

const getContactsLeftWidget = (isContactLeft) => {
  if (isContactLeft) {
    return <h3 aria-live="polite" className="call__contacts__left" >{contactsLeftText}</h3>
  } else {
    return ''
  }
}

const getContent = (currentContact, contactsLeft) => {
  if (currentContact) {
    return (
      <div className="call__outcomes">
        <h3 className="call__outcomes__header">Enter your call result to get the next call:</h3>
        <div className="call__outcomes__items">
          <button onClick={() => outcome('unavailable')}>Unavailable</button>
          <button onClick={() => outcome('vm')}>Left Voicemail</button>
          <button onClick={() => outcome('contacted')}>Made Contact</button>
          <button onClick={() => outcome()}>Skip</button>
        </div>
        {getContactsLeftWidget(contactsLeft > 0)}
      </div>
    )
  }
  else {
    return ''
  }
}

const Outcomes = (currentContact, isContactLeft) => (
  <div>
    {getContent(currentContact, isContactLeft)}
  </div>
)

Outcomes.propTypes = {
  currentContact: PropTypes.any.isRequired,
  isContactLeft: PropTypes.bool.isRequired
}

export default Outcomes
