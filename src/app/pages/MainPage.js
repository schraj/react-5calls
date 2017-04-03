import React from 'react';
import SidebarContainer from '../containers/SidebarContainer'
import HypothesisContainer from '../containers/HypothesisContainer'
import Footer from '../components/Footer'

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