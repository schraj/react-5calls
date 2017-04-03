import { connect } from 'react-redux'

import Impact from '../components/Impact'

const mapStateToProps = (state) => ({
  userStats: state.userStats,
  totalCalls: state.remoteData.totalCalls  
})

const mapDispatchToProps =  ({
})

const ImpactContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Impact)

export default ImpactContainer
