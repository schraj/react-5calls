import { connect } from 'react-redux'

import Sidebar from '../components/Sidebar'
import { selectIssue, resetIssues, resetLocation, setLocation } from '../redux/actions/index'

const mapStateToProps = (state) => ({
  issues: state.remoteData.issues,
  callState: state.callState,
  locationInfo: state.locationInfo,
  invalidAddress: state.remoteData.invalidAddress,
  isDebug: state.isDebug
})

const mapDispatchToProps =  ({
    onSelectIssue: selectIssue,
    resetIssues: resetIssues,
    resetLocation: resetLocation,
    setLocation: setLocation
})

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)

export default SidebarContainer
