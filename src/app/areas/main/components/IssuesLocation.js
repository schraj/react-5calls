import React, { PropTypes } from 'react'

class IssuesLocation extends React.Component {
  constructor(props) {
    super(props);
    this.setInitialState(props);
  }

  setInitialState = (props) => {
    this.state = {
      askingLocation: false,
      fetchingLocation: false
    }

    console.log("setting initial state: %o", this.state)
  }

  setCurrentState = (newProps) => {
  }

  // componentWillReceiveProps(newProps) {
  //   console.log("will receive props")
  //   console.log("newProps: %o", newProps)

  //   this.setCurrentState(newProps);    
  // }

  // shouldComponentUpdate(newProps, newState) {
  //   console.log("should update")
  //   console.log("newProps: %o", newProps)
  //   console.log("newState: %o", newState)
  //   return true;
  // }

  // componentWillUpdate(newProps, newState) {
  //   console.log("will update")
  //   console.log("newProps: %o", newProps)
  //   console.log("newState: %o", newState)
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("did update")
  //   console.log("prevProps: %o", prevProps)
  //   console.log("prevState: %o", prevState)
  // }

  // componentWillMount() {
  //   console.log("will mount")
  // }

  // componentDidMount() {
  //   console.log("did mount")
  // }

  enterLocation = () => {

  }

  debugText = (isDebug) => {
    return isDebug ? <a href="#" onClick={this.props.reset()}>reset</a> : '';
  }

  pretext = () => {
    if (this.state.fetchingLocation) {
      return <p className="loadingAnimation">Getting your location</p>;
    } else if (this.state.askingLocation) {
      return "";
    } else if (this.props.invalidAddress) {
      return <p><button className="subtle-button" onClick={this.enterLocation()}>That address is invalid, please try again</button></p>;
    } else if (this.props.locationInfo.address) {
      return <p>for <button className="subtle-button" onClick={this.enterLocation()}>{this.props.address}</button></p>;
    } else if (this.props.locationInfo.cachedCity) {
      return <p>for <button className="subtle-button" onClick={this.enterLocation()}> {this.props.geolocationInfo.cachedCity}</button> {this.debugText(this.props.isDebug)}</p>;
    } else {
      return <p><button className="subtle-button" onClick={this.enterLocation()}>Choose a location</button></p>;
    }
  }

  render() {
    return (
      <div className="issues__location">
        {this.pretext()}
        {/*{addressForm()}*/}
      </div>
    )
  }
}

IssuesLocation.propTypes = {
  callState: PropTypes.any.isRequired,
  locationInfo: PropTypes.any.isRequired,
  invalidAddress: PropTypes.bool.isRequired,
  isDebug: PropTypes.any.isRequired,
  reset: PropTypes.func.isRequired,
}

export default IssuesLocation
