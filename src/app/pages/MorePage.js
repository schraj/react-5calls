import React from 'react';
import SidebarContainer from '../containers/SidebarContainer'
import ImpactContainer from '../containers/ImpactContainer'
import Footer from '../components/Footer'

class MorePage extends React.Component {
  render() {
    return (
      <div>
        <div className="layout">
          <SidebarContainer />
          <ImpactContainer />
        </div>
        <Footer />
      </div>
    );
  }
}

export default MorePage;