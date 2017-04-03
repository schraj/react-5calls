import { connect } from 'react-redux'

import Call from '../components/Call'
import { submitOutcome, setAskingLocation } from '../redux/actions/index'

const mapStateToProps = (state) => ({
  issues: state.remoteData.issues,
  callState: state.callState,
  splitDistrict: state.remoteData.splitDistrict,
  locationInfo: state.locationInfo
})

const mapDispatchToProps =  ({
  onEnterLocation: () => setAskingLocation(true),
  onSubmitOutcome: submitOutcome
})

const CallContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Call)

export default CallContainer
