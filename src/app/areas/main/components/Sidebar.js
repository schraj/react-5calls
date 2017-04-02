import React, { PropTypes } from 'react'
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
  //scrollIntoView(document.querySelector('#content'))
}

const Sidebar = ({issues, uiState, onSelectIssue}) => (
  <aside id="nav" role="contentinfo" className="layout__side">
    <div className="issues">
      {IssuesHeader(issues, uiState)}
      {IssueList(issues, uiState, onSelectIssue)}
      <a href="/more" className="issues__footer-link" onClick={scrollToTop}>view more issues</a>
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
