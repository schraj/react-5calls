import React, { PropTypes } from 'react'
import CallCount from './CallCount'
import Promote from './Promote'

class Done extends React.Component {  
  constructor(props) {
    super(props);
    this.setInitialState(props);
  }

  setInitialState = (props) => {
    let issue = this.getIssueFromProps(props);
    this.state = {
      issue: issue
    }
    console.log("setting initial state: %o", this.state)
  }

  setCurrentState = (newProps) => {
  }

  getIssueFromProps = (props) => {
    return props.issues.find((i) => { return i.id === props.uiState.currentIssueId });
  }

  componentWillReceiveProps(newProps) {
    console.log("will receive props")
    console.log("newProps: %o", newProps)

    this.setCurrentState(newProps);    
  }

  // shouldComponentUpdate(newProps, newState) {
  //   console.log("should update")
  //   console.log("newProps: %o", newProps)
  //   console.log("newState: %o", newState)
  //   return true;
  // }

  // componentWillUpdate(newProps, newState) {
  //   console.log("will update")
  //   console.log("newProps: %o", newProps)
  //   console.log("newState: %o", newState)
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("did update")
  //   console.log("prevProps: %o", prevProps)
  //   console.log("prevState: %o", prevState)
  // }

  // componentWillMount() {
  //   console.log("will mount")
  // }

  // componentDidMount() {
  //   console.log("did mount")
  // }


  render() {
   return (
        <main id="content" role="main" class="layout__main">
        <section class="call">
          <div class="call_complete">
            <h2 class="call__title">Great work!</h2>
            <p class="call__text">
              Pick another issue to keep calling, or spread the word by sharing your work with friends:
            </p>
            <Promote issue={this.state.issue} hasIssue={true} />
    
            <p class="call__text"> <a href="/about">Learn why calling</a> representatives is the most effective way of making your voice heard.</p>
    
           {CallCount(this.props.totalCalls)}
          </div>
        </section>
        </main>      
    )
  }
}

Done.propTypes = {
  issues: PropTypes.any.isRequired,
  uiState: PropTypes.any.isRequired,
  totalCalls: PropTypes.number.isRequired
}

export default Done
