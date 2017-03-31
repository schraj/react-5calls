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
  </div>  
)

IssueList.propTypes = {
}

export default IssueList
