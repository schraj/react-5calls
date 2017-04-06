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
    this.props.setLocation(this.state.address);
  }
  
  render() {
    return (
      <div className="issues__location">
        {LocationChooser(
          this.props.locationProcessing.fetchingLocation
          , this.props.locationProcessing.askingLocation
          , this.props.invalidAddress
          , this.props.locationInfo.cachedAddress
          , this.props.locationInfo.cachedCity
          , this.props.isDebug
          , this.props.onEnterLocation
          , this.props.setLocation
          )}

          {this.props.locationProcessing.askingLocation && !this.props.locationProcessing.fetchingLocation && 
            <form onSubmit={this.handleSubmit} >
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
            </form>
          }
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
