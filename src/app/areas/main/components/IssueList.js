import React, { PropTypes } from 'react'
import Issue from './Issue'

const getItems = (issues, onSelectIssue)=> {
    return issues.map(issue =>
     <Issue
        key={issue.id}
        issue={issue}
        isCompleted={false}
        onSelectIssue={onSelectIssue}
      />
    )    
} 

const IssueList = (issues, onSelectIssue) => (
  <div>
    <ul className="issues-list" role="navigation">
      {getItems(issues, onSelectIssue)}
    </ul>
  </div>  
)

IssueList.propTypes = {
  issues: PropTypes.any.isRequired,
  onSelectIssue: PropTypes.func.isRequired,
}

export default IssueList
