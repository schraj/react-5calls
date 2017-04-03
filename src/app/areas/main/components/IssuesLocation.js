import React, { PropTypes } from 'react'

class IssuesLocation extends React.Component {
  enterLocation = () => {

  }

  debugText = (debug) => {
    return debug ? <a href="#" onClick={this.props.reset()}>reset</a> : '';
  }

  pretext = (state) => {
    if (state.fetchingLocation) {
      return <p className="loadingAnimation">Getting your location</p>;
    } else if (this.state.askingLocation) {
      return "";
    } else if (this.state.invalidAddress) {
      return <p><button className="subtle-button" onClick={this.enterLocation()}>That address is invalid, please try again</button></p>;
    } else if (this.props.address) {
      return <p>for <button className="subtle-button" onClick={this.enterLocation()}>{this.props.address}</button></p>;
    } else if (this.props.cachedCity) {
      return <p>for <button className="subtle-button" onClick={this.enterLocation()}> {this.props.geolocationInfo.cachedCity}</button> {this.debugText(this.props.isDebug)}</p>;
    } else {
      return <p><button className="subtle-button" onClick={this.enterLocation()}>Choose a location</button></p>;
    }
  }

  render() {
    return (
      <div className="issues__location">
        {/*{pretext(state)}
    {addressForm(state)}*/}
      </div>
    )
  }
}

IssuesLocation.propTypes = {
  callState: PropTypes.any.isRequired,
  reset: PropTypes.any.isRequired,
  debug: PropTypes.any.isRequired
}

export default IssuesLocation
