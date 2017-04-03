import React, { PropTypes } from 'react'

const ImpactTotal = (userStats) => (
  <h2 className="impact_total">
    You have made <span>{userStats.all.length} call{ userStats.all.length !== 1 ? "s" : "" }</span>!
  </h2>
)

ImpactTotal.propTypes = {
  userStats: PropTypes.number.isRequired,
}

export default ImpactTotal
