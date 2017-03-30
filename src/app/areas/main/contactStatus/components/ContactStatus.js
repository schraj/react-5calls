import React, { PropTypes } from 'react'
import './ContactStatus.css'


const ContactStatus = ({ contactCount, statusMessage }) => (
  <div className="contact-status-widget">
    <div className="contact-count">{contactCount}</div>
    <div className="contact-status-message">{statusMessage}</div>    
  </div>
)

ContactStatus.propTypes = {

}

export default ContactStatus