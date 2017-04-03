import React from 'react';
import SidebarContainer from '../containers/SidebarContainer'
import DoneContainer from '../containers/DoneContainer'
import Footer from '../components/Footer'

class DonePage extends React.Component {
  render() {
    return (
      <div>
        <div className="layout">
          <SidebarContainer />
          <DoneContainer />
        </div>
        <Footer />
      </div>
    );
  }
}

export default DonePage;