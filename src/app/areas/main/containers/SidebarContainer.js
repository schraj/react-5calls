import { connect } from 'react-redux'

import Sidebar from '../components/Sidebar'
import selectIssue from '../../../redux/actions/index'

const mapStateToProps = (state) => ({
  issues: state.remoteData.issues,
  uiState: state.uiState
})

const mapDispatchToProps =  ({
    onSelectIssue: selectIssue
})

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)

export default SidebarContainer
