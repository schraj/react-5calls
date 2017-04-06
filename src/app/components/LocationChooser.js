import React, { PropTypes } from 'react'
import LocationButton from './LocationButton'

const debugText = () => {
    return this.props.isDebug ? <button onClick={this.props.resetLocation}>reset</button> : "";
}

const getChooserWidget = (fetchingLocation, askingLocation, invalidAddress, cachedAddress, cachedCity, onEnterLocation) => {
    if (fetchingLocation) {
      return <p className="loadingAnimation">Getting your location</p>
    } else if (askingLocation) {
      return "";
    } else if (invalidAddress) {
      return <p>{LocationButton("That address is invalid, please try again",onEnterLocation)}</p>
    } else if (cachedAddress) {
      return <p>for {LocationButton(cachedAddress,onEnterLocation)}</p>
    } else if (cachedCity) {
      return <p>for {LocationButton(cachedCity,onEnterLocation)} {this.debugText()}</p>
    } else {
      return <p>{LocationButton("Choose a location",onEnterLocation)}</p>
    }
}

const LocationChooser = (fetchingLocation, askingLocation, invalidAddress, cachedAddress, cachedCity, onEnterLocation) => (
    <div>
    { getChooserWidget(fetchingLocation, askingLocation, invalidAddress, cachedAddress, cachedCity, onEnterLocation) }
    </div>
)

LocationChooser.propTypes = {
    fetchingLocation: PropTypes.bool.isRequired,
    askingLocation: PropTypes.bool.isRequired,
    invalidAddress: PropTypes.bool.isRequired,
    cachedAddress: PropTypes.string.isRequired,
    cachedCity: PropTypes.string.isRequired,
    onEnterLocation: PropTypes.func.isRequired
}

export default LocationChooser
