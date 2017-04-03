import { connect } from 'react-redux'

import Done from '../components/Done'

const mapStateToProps = (state) => ({
  issues: state.remoteData.issues,
  callState: state.callState,
  totalCalls: state.reportData.totalCalls  
})

const mapDispatchToProps =  ({
})

const DoneContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Done)

export default DoneContainer
