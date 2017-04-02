import React from 'react';
import SidebarContainer from '../areas/main/containers/SidebarContainer'
import About from '../areas/main/components/About'

class AboutPage extends React.Component {
    render() {
        return (
          <div className="layout">
            <SidebarContainer />
            <About />
          </div>
        );
    }
}

export default AboutPage;