import React, { PropTypes } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import Contact from './Contact'
import AddContactListItem from './AddContactListItem'
import './ContactList.css'

const getItems = (contacts, onStartEditContact, onDeleteContact, onFindContactOnMap, onStartAddContact)=> {
    return contacts.map(contact =>
     <Contact
        key={contact.id}
        {...contact}
        onEditClick={()=>onStartEditContact(contact.id)}
        onDeleteClick={()=>onDeleteContact(contact.id)}
        onFindClick={()=>onFindContactOnMap(contact.id)}        
      />
    )
    
} 

const ContactList = ({ contacts, onStartEditContact, onStartAddContact, onDeleteContact, onFindContactOnMap }) => (
  <div className="infinite-scroll-container">
    <InfiniteScroll
        pageStart={0}
        loadMore={()=>{}}
        hasMore={false}
        loader={<div className="loader">Loading ...</div>}
        useWindow={false}>
      <AddContactListItem onAddClick={()=>onStartAddContact()}/>
      {getItems(contacts, onStartEditContact, onDeleteContact, onFindContactOnMap)}
    </InfiniteScroll>
  </div>  
)

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    location: PropTypes.string,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  }).isRequired).isRequired,
  onStartAddContact: PropTypes.func.isRequired,
  onStartEditContact: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  onFindContactOnMap: PropTypes.func.isRequired
}

export default ContactList
