import React, { PropTypes } from 'react'
import { Button } from 'react-bootstrap'
import './Contact.css'

const Contact = ({ onEditClick, onDeleteClick, onFindClick, firstName, lastName, location }) => (
  <div className="contact-item">
    <div className="contact-info" onClick={onEditClick}>
      <div className="contact-name">
        <span className="contact-name-string">{firstName} {' '} { lastName }</span>
      </div>
      <div className="contact-location">
        <span className="contact-location-string">{ location }</span>
      </div>
    </div>
    <Button className="delete-button" bsStyle="danger" onClick={onDeleteClick}>X</Button>
    <Button className="info-button" bsStyle="info" onClick={onFindClick}>Find</Button>
  </div>
)

Contact.propTypes = {
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onFindClick: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string
}

export default Contact
