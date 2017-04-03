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
    this.setState({askingLocation: true});
  }

  submitAddress = (e) => {
    e.preventDefault();
    const address = e.currentTarget[0].value;
    this.props.setLocation(address);
    this.setState({askingLocation: false});
  }

  debugText = () => {
    return this.props.isDebug ? <button onClick={this.props.resetLocation}>reset</button> : "";
  }

  pretext = () => {
    if (this.state.fetchingLocation) {
      return <p className="loadingAnimation">Getting your location</p>;
    } else if (this.state.askingLocation) {
      return "";
    } else if (this.props.invalidAddress) {
      return <p><button className="subtle-button" onClick={this.enterLocation}>That address is invalid, please try again</button></p>;
    } else if (this.props.locationInfo.cachedAddress) {
      return <p>for <button className="subtle-button" onClick={this.enterLocation}>{this.props.locationInfo.cachedAddress}</button></p>;
    } else if (this.props.locationInfo.cachedCity) {
      return <p>for <button className="subtle-button" onClick={this.enterLocation}> {this.props.locationInfo.cachedCity}</button> {this.debugText()}</p>;
    } else {
      return <p><button className="subtle-button" onClick={this.enterLocation}>Choose a location</button></p>;
    }
  }

  addressForm(state) {
    const className = (this.state.askingLocation && !this.state.fetchingLocation) ? '' : 'hidden';
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
  isDebug: PropTypes.any.isRequired,
  resetLocation: PropTypes.func.isRequired,
  setLocation: PropTypes.func.isRequired
}

export default IssuesLocation
