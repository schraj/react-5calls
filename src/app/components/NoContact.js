import React, { PropTypes } from 'react'

const enterLocation = (e, onEnterLocation) => {
  e.preventDefault();
  onEnterLocation();
}

const noContactsMessage = (splitDistrict, locationInfo, onEnterLocation) => {  
  if (splitDistrict && (locationInfo.cachedAddress || locationInfo.cachedCity)) {
    return <div>
              <p>The location you provided could be in one of two congressional districts.</p>
              <p><a href="#" onClick={(e) => enterLocation(e, onEnterLocation)}>Enter your address</a> to identify your representative in the House.</p>
            </div>
  }
  else {
    return <h2><a href="#" onClick={(e) => enterLocation(e, onEnterLocation)}>Set your location</a> to find your representatives</h2>
  }
}

const NoContact = (splitDistrict, locationInfo, onEnterLocation) => (
  <div className="call__nocontact">
    {noContactsMessage(splitDistrict, locationInfo, onEnterLocation)}
  </div>
)

NoContact.propTypes = {
  splitDistrict: PropTypes.string.isRequired,
  locationInfo: PropTypes.any.isRequired,
  onEnterLocation: PropTypes.func.isRequired
}

export default NoContact
