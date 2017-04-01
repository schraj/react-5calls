import React from 'react'
import SidebarContainer from './areas/main/contactList/containers/SidebarContainer'
import ContentContainer from './areas/main/contactList/containers/ContentContainer'

import './App.css'

const App = () => (
  <div id="root" className="layout">
    <SidebarContainer />
    <ContentContainer />
  </div>
)

export default App
