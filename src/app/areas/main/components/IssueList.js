import React, { PropTypes } from 'react'
import Issue from './Issue'

const getItems = (issues, callState, onSelectIssue)=> {
    return issues.map(issue =>
     <Issue
        key={issue.id}
        issue={issue}
        isCompleted={callState.completedIssues.find((ci) => ci === issue.id) !== undefined}
        onSelectIssue={onSelectIssue}
        isActive={issue.id===callState.currentIssueId}
      />
    )    
} 

const IssueList = (issues, callState, onSelectIssue) => (
  <div>
    <ul className="issues-list" role="navigation">
      {getItems(issues, callState, onSelectIssue)}
    </ul>
  </div>  
)

IssueList.propTypes = {
  issues: PropTypes.any.isRequired,
  callState: PropTypes.any.isRequired,
  onSelectIssue: PropTypes.func.isRequired,
}

export default IssueList
