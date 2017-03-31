import React, { PropTypes } from 'react'
import './Issue.css'

const Issue = ({  }) => (
  <div>
    <div>
      <div>
        <span></span>
      </div>
      <div className="contact-location">
        <span className="contact-location-string"></span>
      </div>
    </div>
    <Button className="delete-button" bsStyle="danger">X</Button>
    <Button className="info-button" bsStyle="info">Find</Button>
  </div>
)

Issue.propTypes = {
}

export default Issue
