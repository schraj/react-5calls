import React, { PropTypes } from 'react'
import Issue from './Issue'

const getItems = (issues, uiState, onSelectIssue)=> {
    return issues.map(issue =>
     <Issue
        key={issue.id}
        issue={issue}
        isCompleted={uiState.completedIssues.find((ci) => ci === issue.id) !== undefined}
        onSelectIssue={onSelectIssue}
        isActive={issue.id===uiState.currentIssueId}
      />
    )    
} 

const IssueList = (issues, uiState, onSelectIssue) => (
  <div>
    <ul className="issues-list" role="navigation">
      {getItems(issues, uiState, onSelectIssue)}
    </ul>
  </div>  
)

IssueList.propTypes = {
  issues: PropTypes.any.isRequired,
  uiState: PropTypes.any.isRequired,
  onSelectIssue: PropTypes.func.isRequired,
}

export default IssueList
