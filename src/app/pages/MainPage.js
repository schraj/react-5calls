import React from 'react';
import SidebarContainer from '../areas/main/containers/SidebarContainer'
import HypothesisContainer from '../areas/main/containers/HypothesisContainer'
import Footer from '../areas/main/components/Footer'

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <div className="layout">
          <SidebarContainer />
          <HypothesisContainer />
        </div>
        <Footer />
      </div>
    );
  }
}

export default MainPage;