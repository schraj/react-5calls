import React, { PropTypes } from 'react'

const CallCount = (totalCalls) => (
  <h2 class="callcount">
    Together we’ve made {totalCalls} calls
  </h2>
)

CallCount.propTypes = {
  totalCalls: PropTypes.number.isRequired,
}

export default CallCount
