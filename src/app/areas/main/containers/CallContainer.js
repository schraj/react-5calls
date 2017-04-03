import { connect } from 'react-redux'

import Call from '../components/Call'
import { submitOutcome } from '../../../redux/actions/index'

const mapStateToProps = (state) => ({
  issues: state.remoteData.issues,
  callState: state.callState
})

const mapDispatchToProps =  ({
  onSubmitOutcome: submitOutcome
})

const CallContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Call)

export default CallContainer
