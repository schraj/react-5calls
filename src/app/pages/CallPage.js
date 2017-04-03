import React from 'react';
import SidebarContainer from '../containers/SidebarContainer'
import CallContainer from '../containers/CallContainer'
import Footer from '../components/Footer'

class CallPage extends React.Component {
  render() {
    return (
      <div>
        <div className="layout">
          <SidebarContainer />
          <CallContainer />
        </div>
        <Footer />
      </div>
    );
  }
}

export default CallPage;