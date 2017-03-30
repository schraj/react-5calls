import { ADD_BASE_STATE }  from '../actions/index'

// ADD/EDIT/NONE
// If EDIT, contact id

export const addEditContactDisplay = (state = { displayType: 'NONE', id: null }, action) => {
  switch (action.type) {
    case START_EDIT_CONTACT:
      return {
        displayType: 'EDIT',
        id: action.id
      } 
    case START_ADD_CONTACT:
      return {
        displayType: 'ADD',
        id: null
      } 
    case END_ADDEDIT_CONTACT:
      return {
        displayType: 'NONE',
        id: null
      } 
    default:
      return state
  }
}

export default addEditContactDisplay
