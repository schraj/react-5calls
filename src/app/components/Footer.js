import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    <div className="tinyletter__form">
      <form action="https://my.sendinblue.com/users/subscribe/js_id/2p22o/id/1" method="get" target="popupwindow" onSubmit="window.open('https://my.sendinblue.com/users/subscribe/js_id/2p22o/id/1', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
        <label htmlFor="email">Get email alerts once a week</label>
        <span className="emailform">
          <input type="text" name="email" id="email" />
          <input type="submit" value="Subscribe" />
        </span>
      </form>
    </div>
    <div className="colophon">
      <a href="https://github.com/5calls/5calls">
        <i className="fa fa-github" aria-hidden="true"></i> Open Source
        </a>
      <a href="https://twitter.com/make5calls">
        <i className="fa fa-twitter" aria-hidden="true"></i> Updates on Twitter
        </a>
      <a href="https://5calls.org/privacy.html" data-no-routing>
        <i className="fa fa-shield" aria-hidden="true"></i> Privacy
        </a>
      <a href="mailto:make5calls@gmail.com">
        <i className="fa fa-envelope" aria-hidden="true"></i> Contact
        </a>
      <Link to="/about">
        <i className="fa fa-heart" aria-hidden="true"></i> About
        </Link>
      <Link id="impact__link" to="/impact">
          <i className="fa fa-line-chart" aria-hidden="true"></i> Your Impact
      </Link>
      <a href="https://5calls.zendesk.com/hc/en-us/sections/115000760947-FAQ">
        <i className="fa fa-question-circle" aria-hidden="true"></i> FAQ
        </a>
      <br />
      <a href="http://ipinfo.io">IP geolocation by ipinfo.io</a>
    </div>
  </footer>
)

export default Footer
