import React, { PropTypes } from 'react'

const LocationButton = (text, onEnterLocation) => (
  <button className="subtle-button" onClick={onEnterLocation}>
      {text}
  </button>
)

LocationButton.propTypes = {
  text: PropTypes.string.isRequired,
  onEnterLocation: PropTypes.func.isRequired
}

export default LocationButton
