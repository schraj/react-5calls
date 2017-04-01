import { connect } from 'react-redux'

import IssuesHeader from '../components/IssuesHeader'

const mapStateToProps = (state) => ({
  issues: state.remoteData.issues
})

const mapDispatchToProps =  ({
})

const IssuesHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(IssuesHeader)

export default IssuesHeaderContainer
