import React, { PropTypes } from 'react'

const ImpactResult = (userStats) => (
  <p className="impact_result">
    You have <span>made contact {userStats.contacted} time{ userStats.contacted !== "1" ? "s" : "" }</span>
    and left <span>{userStats.vm} voicemail{ userStats.vm !== "1" ? "s" : "" }</span>.
    Your representatives have been unavailable <span>{userStats.unavailable} time{ userStats.unavailable !== "1" ? "s" : "" }</span>.
  </p>
)

ImpactResult.propTypes = {
  userStats: PropTypes.any.isRequired,
}

export default ImpactResult
