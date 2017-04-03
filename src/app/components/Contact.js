import React, { PropTypes } from 'react'

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.setInitialState(props);
  }
  setInitialState = (props) => {
    this.state = {
      showFieldOfficeNumbers : false,
      issueId: props.issue.id
    }
  }

  componentWillReceiveProps(newProps) {
    // on a re-render of this component(any click away to another issue or page), close the field offices widget
    this.setState({showFieldOfficeNumbers:false});
  }

  showFieldOfficesWidget = () => {
    this.setState({showFieldOfficeNumbers: true});
  }

  getPhotoURL = () => {
    return this.props.contact.photoURL === "" ? "/assets/images/5calls-icon-office.png" : this.props.contact.photoURL
  }

  getRepID = () => {
    let repID = ""
    if (this.props.contact.party && this.props.contact.party !== "") {
      repID = this.props.contact.party.substring(0, 1) + "-" + this.props.contact.state;
    } else {
      repID = this.props.contact.state;
    }
    return repID;
  }

  cityFormat = (office) => {
    if (office.city) {
      return "- " + office.city + ", " + this.props.contact.state
    } else {
      return ""
    }
  }

  getFieldOfficesWidget = () => {
    if (this.props.contact.field_offices) {
      if (!this.state.showFieldOfficeNumbers) {
        return <p className="call__contact__show-field-offices">Busy line? <a href="#" onClick={this.showFieldOfficesWidget}>Click here to see local office numbers</a></p>
      }
      else {
        if (this.state.showFieldOfficeNumbers) {
          return (
            <div>
              <h3 className="call__contact__field-offices__header">Local office numbers:</h3>
              <ul className="call__contact__field-office-list">
                {this.props.contact.field_offices.map(office =>
                  <li key={office.city}><a href={`tel:+1${office.phone.replace(/-/g, '')}`}>{office.phone}</a> {this.cityFormat(office)}</li>
                )}
              </ul>
            </div>
          )
        }
      }
    }
  }

  render() {
    return (
      <div className="call__contact" id="contact">
        <div className="call__contact__image"><img alt="" src={this.getPhotoURL()} /></div>
        <h3 className="call__contact__type">Call this office:</h3>
        <p className="call__contact__name">{this.props.contact.name} {this.getRepID()}</p>
        <p className="call__contact__phone">
          <a href={"tel:+1" + this.props.contact.phone}>+1 {this.props.contact.phone}</a>
        </p>
        {this.getFieldOfficesWidget()}
        <h3 className="call__contact__reason__header">Why you’re calling this office:</h3>
        <p className="call__contact__reason">{this.props.contact.reason}</p>
      </div>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.any.isRequired,
  issue: PropTypes.any.isRequired
}

export default Contact
