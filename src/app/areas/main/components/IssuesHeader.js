import React, { PropTypes } from 'react'
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

const IssuesHeader = (issues, uiState) => (
  <header className={classString()} role="banner">
    <h1 className="issues__title">
      <a href="/" onClick={() => { }}>
        <img className="issues__logo" src="/assets/images/5calls-logotype.png" alt="5 Calls" />5 Calls
      </a>
    </h1>
    {IssuesLocation(uiState)}
    {issueExplain(issues)}
  </header>
)

IssuesHeader.propTypes = {
  issues: PropTypes.any.isRequired,
  uiState: PropTypes.any.uiState
}

export default IssuesHeader
