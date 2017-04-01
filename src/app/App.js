import React, {PropTypes} from 'react';
import SidebarContainer from './areas/main/contactList/containers/SidebarContainer'

class App extends React.Component {
    render() {
        return (
          <div className="layout">
            <SidebarContainer />
            {this.props.children}
          </div>
        );
    }
}

App.PropTypes = {
    children: PropTypes.object.isRequired
};

export default App;