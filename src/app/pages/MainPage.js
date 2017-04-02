import React, {PropTypes} from 'react';
import SidebarContainer from '../areas/main/containers/SidebarContainer'
import HypothesisContainer from '../areas/main/containers/HypothesisContainer'
//import Hypothesis from '../areas/main/components/Hypothesis'

class MainPage extends React.Component {
    render() {
        return (
          <div className="layout">
            <SidebarContainer />
            <HypothesisContainer />
          </div>
        );
    }
}

export default MainPage;