import React, { PropTypes } from 'react'
import Issue from './Issue'

const getItems = (issues)=> {
    return issues.map(issue =>
     <Issue
        key={issue.id}
        issue = {issue}
        isCompleted = {false}
      />
    )    
} 

const IssueList = (issues) => (
  <div>
    <ul className="issues-list" role="navigation">
      {getItems(issues)}
    </ul>
  </div>  
)

IssueList.propTypes = {
  issues: PropTypes.any.isRequired
}

export default IssueList
