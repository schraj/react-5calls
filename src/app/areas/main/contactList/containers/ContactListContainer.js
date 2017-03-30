import { connect } from 'react-redux'
import { startEditContact, startAddContact, deleteContact } from '../../../../../app/redux/actions/index'
import { showBalloonFromContact } from '../../../../../app/redux/actions/map_actions'

import ContactList from '../components/ContactList'

const mapStateToProps = (state) => ({
  contacts: state.contacts
})

const mapDispatchToProps =  ({
  onStartEditContact: startEditContact,
  onStartAddContact: startAddContact,
  onDeleteContact: deleteContact,
  onFindContactOnMap: showBalloonFromContact
})

const ContactListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactList)

export default ContactListContainer
