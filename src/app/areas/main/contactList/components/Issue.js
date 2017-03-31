import React, { PropTypes } from 'react'

class Issue extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    function classString(baseAddition) {
      const BASE_CLASS = 'issues-list__item' + baseAddition;
      const ACTIVE_CLASS = 'is-active';
      const COMPLETE_CLASS = 'is-complete';

      let classes = [BASE_CLASS];

      if (this.props.isCompleted) {
        classes.push(COMPLETE_CLASS);
      }

      return classes.join(' ');
    }

    let statusText = "";
    if (this.props.isCompleted) {
      statusText = "Done";
    }

    return (
      <li>
        <a aria-controls="content" className="{classString('')}" href="/issue/{this.props.issue.id}" onclick={() => {}}>
          <span aria-live="polite" className="{classString('__status')}"><span className="visually-hidden">{statusText}</span></span>
          <span className="{classString('__title')}">{this.props.issue.name}</span>
          <span className="{classString('__summary')}">{this.props.issue.contacts.length} call{this.props.issue.contacts.length > 1 ? "s" : ""} to make</span>
        </a>
      </li>
    )
  }
}

Issue.propTypes = {
  issue: PropTypes.any.isRequired,
  isCompleted: PropTypes.bool.isRequired
}

export default Issue;
