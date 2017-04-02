import React from 'react';
import SidebarContainer from '../areas/main/containers/SidebarContainer'
import DoneContainer from '../areas/main/containers/DoneContainer'
import Footer from '../areas/main/components/Footer'

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