import React from 'react';
import SidebarContainer from '../areas/main/containers/SidebarContainer'
import DoneContainer from '../areas/main/containers/DoneContainer'

class DonePage extends React.Component {
    render() {
        return (
          <div className="layout">
            <SidebarContainer />
            <DoneContainer />            
          </div>
        );
    }
}

export default DonePage;