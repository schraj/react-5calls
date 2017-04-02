import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom';

import IssuesHeader from './IssuesHeader'
import IssueList from './IssueList'
import { scrollIntoView } from '../../../services/scrollintoview'

const resetCompletedIssues = () => {
  // send('resetCompletedIssues');
  // send('resetUserStats');
}

const debugText = (debug) => {
  return debug ? <a href="#" onClick={resetCompletedIssues}>reset</a> : '';
}

const scrollToTop = () => {
  window.scrollIntoView(document.querySelector('.issues__title'))
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
