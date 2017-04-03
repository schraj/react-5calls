import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom';

import IssuesHeader from './IssuesHeader'
import IssueList from './IssueList'

const debugText = (isDebug, resetIssues) => {
  return isDebug ? <a href="#" onClick={resetIssues}>reset</a> : '';
}

const scrollToTop = () => {
  window.scroll(0,0);
}

const Sidebar = ({issues, callState, locationInfo, locationProcessing, invalidAddress, isDebug, onSelectIssue, resetIssues, resetLocation, setLocation, onEnterLocation}) => (
  <aside id="nav" role="contentinfo" className="layout__side">
    <div className="issues">
      {IssuesHeader(issues, callState, locationInfo, locationProcessing, invalidAddress, isDebug, resetLocation, setLocation, onEnterLocation)}
      {IssueList(issues, callState, onSelectIssue)}
      <Link to="/more" className="issues__footer-link" onClick={scrollToTop()}>view more issues</Link>
      {debugText(isDebug, resetIssues)}
    </div>
  </aside>
)

Sidebar.propTypes = {
  issues: PropTypes.any.isRequired,
  callState: PropTypes.any.isRequired,
  locationInfo: PropTypes.any.isRequired,
  locationProcessing: PropTypes.any.isRequired,
  invalidAddress: PropTypes.bool.isRequired,
  isDebug: PropTypes.bool.isRequired,
  onSelectIssue: PropTypes.func.isRequired,
  resetIssues: PropTypes.func.isRequired,
  resetLocation: PropTypes.func.isRequired,
  setLocation: PropTypes.func.isRequired,
  onEnterLocation: PropTypes.func.isRequired,
}

export default Sidebar
