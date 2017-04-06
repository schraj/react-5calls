import React, { PropTypes } from 'react'
import LocationChooser from './LocationChooser'

class IssuesLocation extends React.Component {
 constructor(props) {
    super(props);
    this.state = {address: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    this.setState({address: e.target.value});
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('hit handleSubmit')
    this.props.setLocation(this.state.address);
  }

  addressForm(state) {
    const className = (this.props.locationProcessing.askingLocation && !this.props.locationProcessing.fetchingLocation) ? '' : 'hidden';
    return <form onSubmit={this.handleSubmit} className={className}>
              <input 
                type="text" 
                autoFocus="true" 
                id="address" 
                name="address" 
                placeholder="Enter an address or zip code"
                value={this.state.address}
                onChange={this.handleChange}
              /> 
              <button id="btnSubmitLocation" type="submit">Go</button>
            </form>;
  }
  
  render() {
    return (
      <div className="issues__location">
        {LocationChooser(
          this.props.locationProcessing.askingLocation
          , this.props.locationProcessing.fetchingLocation
          , this.props.invalidAddress
          , this.props.locationInfo.cachedAddress
          , this.props.locationInfo.cachedCity
          , this.props.onEnterLocation
          )}
        {this.addressForm()}
        <input id="test" type="text"/>
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
