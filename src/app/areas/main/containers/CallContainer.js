import { connect } from 'react-redux'

import Call from '../components/Call'

const mapStateToProps = (state) => ({
  issues: state.remoteData.issues,
  uiState: state.uiState
})

const mapDispatchToProps =  ({
})

const CallContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Call)

export default CallContainer
