import React, { PropTypes } from 'react'
import LocationButton from './LocationButton'
import DebugButton from './DebugButton'

const getChooserWidget = (fetchingLocation, askingLocation, invalidAddress, cachedAddress, cachedCity, isDebug, onEnterLocation, resetLocation) => {
    if (fetchingLocation) {
      return <p className="loadingAnimation">Getting your location</p>
    } else if (askingLocation) {
      return "";
    } else if (invalidAddress) {
      return <p>{LocationButton("That address is invalid, please try again",onEnterLocation)}</p>
    } else if (cachedAddress) {
      return <p>for {LocationButton(cachedAddress,onEnterLocation)} {DebugButton(isDebug, resetLocation)}</p>
    } else if (cachedCity) {
      return <p>for {LocationButton(cachedCity,onEnterLocation)} {DebugButton(isDebug, resetLocation)}</p>
    } else {
      return <p>{LocationButton("Choose a location",onEnterLocation)}</p>
    }
}

const LocationChooser = (fetchingLocation, askingLocation, invalidAddress, cachedAddress, cachedCity, isDebug, onEnterLocation, resetLocation) => (
    <div>
        { getChooserWidget(fetchingLocation, askingLocation, invalidAddress, cachedAddress, cachedCity, isDebug, onEnterLocation, resetLocation) }
    </div>
)

LocationChooser.propTypes = {
    fetchingLocation: PropTypes.bool.isRequired,
    askingLocation: PropTypes.bool.isRequired,
    invalidAddress: PropTypes.bool.isRequired,
    cachedAddress: PropTypes.string.isRequired,
    cachedCity: PropTypes.string.isRequired,
    isDebug: PropTypes.bool.isRequired,    
    onEnterLocation: PropTypes.func.isRequired,
    resetLocation: PropTypes.func.isRequired
}

export default LocationChooser
