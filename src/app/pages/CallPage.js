import React, {PropTypes} from 'react';
import SidebarContainer from '../areas/main/containers/SidebarContainer'
import CallContainer from '../areas/main/containers/CallContainer'

class CallPage extends React.Component {
    render() {
        return (
          <div className="layout">
            <SidebarContainer />
            <CallContainer />
          </div>
        );
    }
}

export default CallPage;