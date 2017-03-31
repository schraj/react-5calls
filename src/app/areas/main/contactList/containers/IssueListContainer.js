import { connect } from 'react-redux'

import ContactList from '../components/IssueList'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps =  ({
})

const ContactListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactList)

export default ContactListContainer
