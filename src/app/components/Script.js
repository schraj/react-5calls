import React, { PropTypes } from 'react'
import ScriptLine from './ScriptLine'

const getScript = (issue) => {
  // this hides the script if there is no contact

  // const currentIndex = uiState.contactIndices[issue.id];
  // const currentContact = issue.contacts[currentIndex];

  // if (currentContact)

  if (true) {
    return ( 
      <div className="call__script">
        <h3 className="call__script__header">Your script:</h3>
        <div className="call__script__body">{issue.script.split('\n').map((line) => ScriptLine(line))}</div>
      </div>
    )      
  } else {
    return ""
  }
}

const Script = (issue) => (
  <div>
  {getScript(issue)}
  </div>
)

Script.propTypes = {
  issue: PropTypes.any.isRequired,
}

export default Script
