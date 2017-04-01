import { connect } from 'react-redux'

import Sidebar from '../components/Sidebar'

const mapStateToProps = (state) => ({
  issues: state.remoteData.issues,
  uiState: state.uiState
})

const mapDispatchToProps =  ({
})

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)

export default SidebarContainer
