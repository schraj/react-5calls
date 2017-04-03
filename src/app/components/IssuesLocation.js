import React, { PropTypes } from 'react'

class IssuesLocation extends React.Component {
  submitAddress = (e) => {
    e.preventDefault();
    const address = e.currentTarget[0].value;
    this.props.setLocation(address);
  }

  debugText = () => {
    return this.props.isDebug ? <button onClick={this.props.resetLocation}>reset</button> : "";
  }

  pretext = () => {
    if (this.props.locationProcessing.fetchingLocation) {
      return <p className="loadingAnimation">Getting your location</p>;
    } else if (this.props.locationProcessing.askingLocation) {
      return "";
    } else if (this.props.invalidAddress) {
      return <p><button className="subtle-button" onClick={this.props.onEnterLocation}>That address is invalid, please try again</button></p>;
    } else if (this.props.locationInfo.cachedAddress) {
      return <p>for <button className="subtle-button" onClick={this.props.onEnterLocation}>{this.props.locationInfo.cachedAddress}</button></p>;
    } else if (this.props.locationInfo.cachedCity) {
      return <p>for <button className="subtle-button" onClick={this.props.onEnterLocation}> {this.props.locationInfo.cachedCity}</button> {this.debugText()}</p>;
    } else {
      return <p><button className="subtle-button" onClick={this.props.onEnterLocation}>Choose a location</button></p>;
    }
  }

  addressForm(state) {
    const className = (this.props.locationProcessing.askingLocation && !this.props.locationProcessing.fetchingLocation) ? '' : 'hidden';
    return <form onSubmit={this.submitAddress} className={className}><input type="text" autoFocus="true" id="address" name="address" placeholder="Enter an address or zip code" /> <button>Go</button></form>;
  }
  
  render() {
    return (
      <div className="issues__location">
        {this.pretext()}
        {this.addressForm()}
      </div>
    )
  }
}

IssuesLocation.propTypes = {
  callState: PropTypes.any.isRequired,
  locationInfo: PropTypes.any.isRequired,
  invalidAddress: PropTypes.bool.isRequired,
  locationProcessing: PropTypes.any.isRequired,
  isDebug: PropTypes.any.isRequired,
  resetLocation: PropTypes.func.isRequired,
  setLocation: PropTypes.func.isRequired,
  onEnterLocation: PropTypes.func.isRequired,
}

export default IssuesLocation
