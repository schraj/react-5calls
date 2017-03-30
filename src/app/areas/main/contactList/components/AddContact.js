import React, { Component, PropTypes } from 'react'
import './AddContact.css'

export default class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      isEditing: false,
      firstName: '',
      lastName: '',
      location: '',
      lat: '',
      lng: ''
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleLatChange = this.handleLatChange.bind(this);
    this.handleLngChange = this.handleLngChange.bind(this);
  }

 handleFirstNameChange(event) {
    this.setState({firstName: event.target.value});
  }

 handleLastNameChange(event) {
    this.setState({lastName: event.target.value});
  }

 handleLocationChange(event) {
    this.setState({location: event.target.value});
  }

 handleLatChange(event) {
    this.setState({lat: event.target.value});
  }

 handleLngChange(event) {
    this.setState({lng: event.target.value});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.addEditContactDisplay.displayType === 'EDIT'){
        this.setState({
          isVisible: true,
          isEditing: true,           
          id: nextProps.contact.id,
          firstName: nextProps.contact.firstName,
          lastName: nextProps.contact.lastName,
          location: nextProps.contact.location,
          lat: nextProps.contact.lat,
          lng: nextProps.contact.lng
        });
    } else if (nextProps.addEditContactDisplay.displayType === 'ADD'){
        this.setState({
          isVisible: true,
          isEditing: false, 
          firstName: '',
          lastName: '',
          location: '',
          lat: '',
          lng: ''
        });
    } else {
        this.setState({
          isVisible: false,
          isEditing: false, 
          firstName: '',
          lastName: '',
          location: '',
          lat: '',
          lng: ''
        });
    }
  }
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
    onUpdateContact: PropTypes.func.isRequired,
    onEndAddEditContact: PropTypes.func.isRequired
  }
  
  handleSubmit = (e) => {
      e.preventDefault()

      if (!this.state.isEditing){
        this.props.onAddContact(this.state.firstName, this.state.lastName, this.state.location, this.state.lat, this.state.lng)
      } else {
        this.props.onUpdateContact(this.state.id, this.state.firstName, this.state.lastName, this.state.location, this.state.lat, this.state.lng)        
      }

      this.props.onEndAddEditContact();

      this.setState({
        isVisible: false,
        isEditing: false, 
        id: '',
        firstName: '',
        lastName: '',
        location: '',
        lat: '',
        lng: ''
      });
  }

  handleCancel = (e) => {
      e.preventDefault()

      this.props.onEndAddEditContact();

      this.setState({
        isVisible: false,
        isEditing: false, 
        id: '',
        firstName: '',
        lastName: '',
        location: '',
        lat: '',
        lng: ''
      });
  }

render() {  
    return (
      <div className={this.state.isVisible ? "contact-form is-visible" : "contact-form" }>
        <h3>{!this.state.isEditing? "Add Contact" : "Edit Contact"}</h3>
        <form onSubmit={this.handleSubmit} className={this.state.isVisible ? "is-visible" : "" }>
          <div className="form-group">
            <label>First Name: </label>
            <input type="text" 
              value={this.state.firstName}
              onChange={this.handleFirstNameChange}
            />
          </div>
          <div className="form-group">
            <label>Last Name: </label>
            <input type="text" 
              value={this.state.lastName}
              onChange={this.handleLastNameChange}
            />
          </div>
          <div className="form-group">
            <label>Location: </label>
            <input type="text" 
              value={this.state.location}
              onChange={this.handleLocationChange}
            />
          </div>           
          <div className="form-group">
            <label>Latitude: </label>
            <input type="text" 
              value={this.state.lat}
              onChange={this.handleLatChange}
            />
          </div>           
          <div className="form-group">
            <label>Longitude: </label>
            <input type="text" 
              value={this.state.lng}
              onChange={this.handleLngChange}
            />
          </div>           
          <button className="btn btn-primary btn-large add-edit-submit-button" type="submit">Save</button>
          <button className="btn btn-secondary btn-large add-edit-cancel-button" onClick={this.handleCancel}>Cancel</button>
        </form>
      </div>
    )
  }
}
