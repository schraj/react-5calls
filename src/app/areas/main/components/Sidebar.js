import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom';

import IssuesHeader from './IssuesHeader'
import IssueList from './IssueList'

const resetCompletedIssues = () => {
  // send('resetCompletedIssues');
  // send('resetUserStats');
}

const debugText = (debug) => {
  return debug ? <a href="#" onClick={resetCompletedIssues}>reset</a> : '';
}

const scrollToTop = () => {
  window.scroll(0,0);
}

const Sidebar = ({issues, uiState, onSelectIssue}) => (
  <aside id="nav" role="contentinfo" className="layout__side">
    <div className="issues">
      {IssuesHeader(issues, uiState)}
      {IssueList(issues, uiState, onSelectIssue)}
      <Link to="/more" className="issues__footer-link" onClick={scrollToTop}>view more issues</Link>
      {debugText(uiState.debug)}
    </div>
  </aside>
)

Sidebar.propTypes = {
  issues: PropTypes.any.isRequired,
  uiState: PropTypes.any.isRequired,
  onSelectIssue: PropTypes.func.isRequired
}

export default Sidebar
