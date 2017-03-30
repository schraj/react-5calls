import React from 'react'
import AddContactContainer from './areas/main/contactList/containers/AddContactContainer'
import ContactListContainer from './areas/main/contactList/containers/ContactListContainer'
import ContactStatusContainer from './areas/main/contactStatus/containers/ContactStatusContainer'

import './App.css'

const App = () => (
  <div className="main-scene-layout">
    <div className="scroll-layout">
      <ContactListContainer />
    </div>
    <div className="map-layout">
       <ContactPlacesMapContainer />
    </div>
    <ContactStatusContainer />
    <AddContactContainer />
  </div>
)

export default App
