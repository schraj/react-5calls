import { connect } from 'react-redux'

import Sidebar from '../components/Sidebar'
import { selectIssue, setLocation, setAskingLocation } from '../redux/actions/index'
import { resetIssues, resetLocation } from '../redux/actions/debug'

const mapStateToProps = (state) => ({
  issues: state.remoteData.activeIssues,
  callState: state.callState,
  locationInfo: state.locationInfo,
  locationProcessing: state.locationProcessing,
  invalidAddress: state.remoteData.invalidAddress,
  isDebug: state.isDebug
})

const mapDispatchToProps =  ({
    onSelectIssue: selectIssue,
    resetIssues: resetIssues,
    resetLocation: resetLocation,
    setLocation: setLocation,
    onEnterLocation: () => setAskingLocation(true)
})

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)

export default SidebarContainer
