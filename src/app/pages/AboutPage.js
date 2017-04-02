import React from 'react';
import SidebarContainer from '../areas/main/containers/SidebarContainer'
import About from '../areas/main/components/About'
import Footer from '../areas/main/components/Footer'

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <div className="layout">
          <SidebarContainer />
          <About />
        </div>
        <Footer />
      </div>
    );
  }
}

export default AboutPage;