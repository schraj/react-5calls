import React, { PropTypes } from 'react'
import ImpactTotal from './ImpactTotal'
import ImpactResult from './ImpactResult'
import CallCount from './CallCount'

class Impact extends React.Component {
  render() {
    return (
      <main id="content" role="main" aria-live="polite" className="layout__main">
        <section className="impact">
          <h2 className="impact__title">My Impact</h2>
          {ImpactTotal(this.props.userStats)}
          <p className="impact__text">
            That's awesome and you should feel awesome. <br />
            Every call counts!
          </p>
          {ImpactResult(this.props.userStats)}
          {CallCount(this.props.totalCalls)}
        </section>
      </main>
    )
  }
}

Impact.propTypes = {
  userStats: PropTypes.any.isRequired,
  totalCalls: PropTypes.number.isRequired,
}

export default Impact
