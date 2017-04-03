import { connect } from 'react-redux'

import Sidebar from '../components/Sidebar'
import { selectIssue } from '../../../redux/actions/index'

const mapStateToProps = (state) => ({
  issues: state.remoteData.issues,
  callState: state.callState
})

const mapDispatchToProps =  ({
    onSelectIssue: selectIssue
})

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)

export default SidebarContainer
