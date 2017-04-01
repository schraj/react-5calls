import { connect } from 'react-redux'

import Content from '../components/Content'

const mapStateToProps = (state) => ({
  issues: state.remoteData.issues,
  uiState: state.uiState
})

const mapDispatchToProps =  ({
})

const ContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content)

export default ContentContainer
