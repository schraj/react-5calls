import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT}  from '../actions/index'
import {REHYDRATE} from 'redux-persist/constants'

const contact = (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
    case UPDATE_CONTACT:
      return {
        id: action.id,
        firstName: action.firstName,
        lastName: action.lastName,
        location: action.location,
        lat: action.lat,
        lng: action.lng
      }
    default:
      return state
  }
}

export const contacts = (state = [], action) => {
  switch (action.type) {
    case REHYDRATE: { 
        if (action.payload && action.payload.contacts){          
          return action.payload.contacts
        }       
        else {
          return state
        }
    }
    case ADD_CONTACT:
      return [
        ...state,
        contact(undefined, action)
      ]
    case DELETE_CONTACT:
      const contactId = action.id;
      return state.filter(contact => contact.id !== contactId);
    case UPDATE_CONTACT:
      return state.map(c => {
           if (c.id !== action.id){
             return c
           } 

          return contact(undefined, action)           
        })      
    default:
      return state
  }
}

export default contacts
