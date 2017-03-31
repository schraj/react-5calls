import React, { PropTypes } from 'react'
import Issue from './Issue'
import './IssueList.css'

const getItems = (issues)=> {
    return issues.map(issue =>
     <Issue
        key={issue.id}
        {...issue}
      />
    )
    
} 

const IssueList = ({ issues }) => (
  <div>
    <ul class="issues-list" role="navigation">
      ${issues.filter((i) => i.inactive === false).map((i) => Issue(i))}
    </ul>
  </div>  
)

IssueList.propTypes = {
}

export default IssueList
