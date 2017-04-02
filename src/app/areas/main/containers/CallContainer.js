import { connect } from 'react-redux'

import Call from '../components/Call'
import { submitOutcome } from '../../../redux/actions/index'

const mapStateToProps = (state) => ({
  issues: state.remoteData.issues,
  uiState: state.uiState
})

const mapDispatchToProps =  ({
  onSubmitOutcome: submitOutcome
})

const CallContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Call)

export default CallContainer
