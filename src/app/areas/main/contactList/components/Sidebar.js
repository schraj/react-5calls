import React, { PropTypes } from 'react'
import IssuesHeader from './IssuesHeader'
import IssueList from './IssueList'

const debugText = (debug) => {
  return debug ? <a href="#" onClick={resetCompletedIssues}>reset</a> : '';
}

const resetCompletedIssues = () => {
  // send('resetCompletedIssues');
  // send('resetUserStats');
}

const scrollToTop = () => {
  //scrollIntoView(document.querySelector('#content'))
}

const Sidebar = ({issues, uiState}) => (
  <aside id="nav" role="contentinfo" className="layout__side">
    <div className="issues">
      {IssuesHeader(issues, uiState)}
      {IssueList(issues)}
      <a href="/more" className="issues__footer-link" onClick={scrollToTop}>view more issues</a>
      {debugText(uiState.debug)}
    </div>
  </aside>
)

Sidebar.propTypes = {
  issues: PropTypes.any.isRequired,
  uiState: PropTypes.any.isRequired
}

export default Sidebar
