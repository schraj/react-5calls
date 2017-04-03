import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom';

import IssuesHeader from './IssuesHeader'
import IssueList from './IssueList'

const debugText = (isDebug, reset) => {
  return isDebug ? <a href="#" onClick={reset()}>reset</a> : '';
}

const scrollToTop = () => {
  window.scroll(0,0);
}

const Sidebar = ({issues, callState, isDebug, onSelectIssue, reset}) => (
  <aside id="nav" role="contentinfo" className="layout__side">
    <div className="issues">
      {IssuesHeader(issues, callState, isDebug)}
      {IssueList(issues, callState, onSelectIssue)}
      <Link to="/more" className="issues__footer-link" onClick={scrollToTop()}>view more issues</Link>
      {debugText(isDebug)}
    </div>
  </aside>
)

Sidebar.propTypes = {
  issues: PropTypes.any.isRequired,
  callState: PropTypes.any.isRequired,
  onSelectIssue: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
}

export default Sidebar
