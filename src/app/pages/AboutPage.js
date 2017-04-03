import React from 'react';
import SidebarContainer from '../containers/SidebarContainer'
import About from '../components/About'
import Footer from '../components/Footer'

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