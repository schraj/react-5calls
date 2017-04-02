import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom';

class Issue extends React.Component {  
  render() {  
    let ACTIVE_CLASS = 'is-active';
    let COMPLETE_CLASS = 'is-complete';

    return (
      <li>
        <Link aria-controls="content" className={`issues-list__item ${this.props.isCompleted ? COMPLETE_CLASS : ''} ${this.props.isActive ? ACTIVE_CLASS : ''}`} to="/issue" onClick={() => { this.props.onSelectIssue(this.props.issue.id) }}>
          <span aria-live="polite" className={`issues-list__item__status ${this.props.isCompleted ? COMPLETE_CLASS : ''} ${this.props.isActive ? ACTIVE_CLASS : ''}`}><span className="visually-hidden">{this.props.isCompleted ? 'Done' : ''}}</span></span>
          <span className={`issues-list__item__title ${this.props.isCompleted ? COMPLETE_CLASS : ''} ${this.props.isActive ? ACTIVE_CLASS : ''}`}>{this.props.issue.name}</span>
          <span className={`issues-list__item__summary ${this.props.isCompleted ? COMPLETE_CLASS : ''} ${this.props.isActive ? ACTIVE_CLASS : ''}`}>{this.props.issue.contacts.length} call{this.props.issue.contacts.length > 1 ? "s" : ""} to make</span>
        </Link>
      </li>
    )
  }
}


Issue.propTypes = {
  issue: PropTypes.any.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired,
  onSelectIssue: PropTypes.func.isRequired,
}

export default Issue;
