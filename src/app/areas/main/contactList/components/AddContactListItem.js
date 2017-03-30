import React, { PropTypes } from 'react'
import './Contact.css'

const AddContactListItem = ({ onAddClick }) => (
  <div className="contact-item">
    <Button className="add-button" bsStyle="primary" onClick={onAddClick}>Add Contact</Button>
  </div>
)

AddContactListItem.propTypes = {
  onAddClick: PropTypes.func.isRequired
}

export default AddContactListItem
