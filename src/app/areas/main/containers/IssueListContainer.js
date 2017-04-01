import { connect } from 'react-redux'

import IssueList from '../components/IssueList'

const mapStateToProps = (state) => ({
  issues: state.remoteData.issues
})

const mapDispatchToProps =  ({
})

const IssueListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueList)

export default IssueListContainer
