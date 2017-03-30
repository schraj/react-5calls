import { connect } from 'react-redux'
import { addContact, updateContact, endAddEditContact } from '../../../../../app/redux/actions/index'
import AddContact from '../components/AddContact'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps =  ({
})

const AddContactContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddContact)

export default AddContactContainer
