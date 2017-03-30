import { connect } from 'react-redux'

import ContactList from '../components/ContactList'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps =  ({
})

const ContactListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactList)

export default ContactListContainer
