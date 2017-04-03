import React, { PropTypes } from 'react'

const NoContact = (issue, callState) => (
  <div>
    No NoContact
  </div>
)

NoContact.propTypes = {
  issue: PropTypes.any.isRequired,
  callState: PropTypes.any.isRequired
}

export default NoContact
