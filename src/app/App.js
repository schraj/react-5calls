import React from 'react'
import AddContactContainer from './areas/main/contactList/containers/AddContactContainer'
import ContactListContainer from './areas/main/contactList/containers/ContactListContainer'
import ContactStatusContainer from './areas/main/contactStatus/containers/ContactStatusContainer'
//import MainMapPage from './areas/main/map/main_map_page'
//import SimpleMapPage from './areas/main/map/simple_map_page'
import ContactPlacesMapContainer from './areas/main/map/ContactPlacesMapContainer'

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
