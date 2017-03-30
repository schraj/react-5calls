import { connect } from 'react-redux'
import { addContact, updateContact, endAddEditContact } from '../../../../../app/redux/actions/index'
import AddContact from '../components/AddContact'
import { getContact } from '../../../../../app/redux/stores/contacts'

const mapStateToProps = (state) => {
  return {
    addEditContactDisplay: state.addEditContactDisplay,
    contact: getContact(state)
  }
}

const mapDispatchToProps =  ({
  onAddContact: addContact,
  onUpdateContact: updateContact,
  onEndAddEditContact: endAddEditContact
})

const AddContactContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddContact)

export default AddContactContainer
