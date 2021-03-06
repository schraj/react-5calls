import { connect } from 'react-redux'

import Hypothesis from '../components/Hypothesis'

const mapStateToProps = (state) => ({
  totalCalls: state.reportData.totalCalls,
})

const mapDispatchToProps =  ({
})

const HypothesisContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Hypothesis)

export default HypothesisContainer
