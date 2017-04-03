import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom';

import IssuesLocation from './IssuesLocation'

const issueExplain = (issues) => {
  if (issues.length > 0) {
    return <h2>What’s important to you?</h2>
  } else {
    return ''
  }
}

const classString = () => {
  const BASE_CLASS = 'issues__header';
  const ACTIVE_CLASS = 'is-active';

  let classes = [BASE_CLASS];

  classes.push(ACTIVE_CLASS);

  return classes.join(' ');
}

const IssuesHeader = (issues, callState) => (
  <header className={classString()} role="banner">
    <h1 className="issues__title">
      <Link to="/">
        <img className="issues__logo" src="/assets/images/5calls-logotype.png" alt="5 Calls" />5 Calls
      </Link>
    </h1>
    {IssuesLocation(callState)}
    {issueExplain(issues)}
  </header>
)

IssuesHeader.propTypes = {
  issues: PropTypes.any.isRequired,
  callState: PropTypes.any.isRequired
}

export default IssuesHeader
