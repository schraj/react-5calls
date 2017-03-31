import { connect } from 'react-redux'

import IssuesLocation from '../components/IssuesLocation'

const mapStateToProps = (state) => ({
  uiState: state.uiState
})

const mapDispatchToProps =  ({
})

const IssuesLocation = connect(
  mapStateToProps,
  mapDispatchToProps
)(IssuesLocation)

export default IssuesLocationContainer
