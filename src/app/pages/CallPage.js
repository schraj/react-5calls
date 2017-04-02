import React from 'react';
import SidebarContainer from '../areas/main/containers/SidebarContainer'
import CallContainer from '../areas/main/containers/CallContainer'
import Footer from '../areas/main/components/Footer'

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