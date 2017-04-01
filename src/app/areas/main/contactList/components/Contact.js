import React, { PropTypes } from 'react'

const getPhotoURL = (c) => {
  return c.photoURL == "" ? "/img/5calls-icon-office.png" : c.photoURL
}

const getRepID = (c) => {
  let repID = ""
  if (c.party != "") {
    //repID = c.party.substring(0, 1) + "-" + c.state;
    repID = c.state;
  }
  return repID;
}

const cityFormat = (office, c) => {
  if (office.city) {
    return "- " + office.city + ", " + c.state
  } else {
    return ""
  }
}

const getFieldOfficesWidget = (showFieldOfficeNumbers, c) => {
  if (c.field_offices) {
    if (!showFieldOfficeNumbers) {
      return <p class="call__contact__show-field-offices">Busy line? <a onClick={() => { }}>Click here to see local office numbers</a></p>
    }
    else {
      if (showFieldOfficeNumbers) {
        return (
          <div>
            <h3 class="call__contact__field-offices__header">Local office numbers:</h3>
            <ul class="call__contact__field-office-list">
              {c.field_offices.map(office =>
                <li><a href="tel:+1{office.phone.replace(/-/g, '')}">{office.phone}</a> {cityFormat(office, c)}</li>
              )}
            </ul>
          </div>
        )
      }
    }
  }
}

const Contact = (c) => (
  <div className="call__contact" id="contact">
    <div className="call__contact__image"><img alt="" src="{getPhotoURL(c)}" /></div>
    <h3 className="call__contact__type">Call this office:</h3>
    <p className="call__contact__name">{c.name} {getRepID(c)}</p>
    <p className="call__contact__phone">
      <a href="tel:+1{c.phone}">+1 {c.phone}</a>
    </p>
    {getFieldOfficesWidget(false, c)}
    <h3 className="call__contact__reason__header">Why you’re calling this office:</h3>
    <p className="call__contact__reason">{c.reason}</p>
  </div>
)

Contact.propTypes = {
  c: PropTypes.any.isRequired
}

export default Contact
