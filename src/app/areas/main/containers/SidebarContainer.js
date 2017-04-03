import { connect } from 'react-redux'

import Sidebar from '../components/Sidebar'
import { selectIssue, reset } from '../../../redux/actions/index'

const mapStateToProps = (state) => ({
  issues: state.remoteData.issues,
  callState: state.callState,
  locationInfo: state.locationInfo,
  invalidAddress: state.remoteData.invalidAddress,
  isDebug: state.isDebug
})

const mapDispatchToProps =  ({
    onSelectIssue: selectIssue,
    reset: reset
})

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)

export default SidebarContainer
