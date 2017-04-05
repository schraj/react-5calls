import * as types from '../actions/types'

export const callState = (state = {}, action) => {
  switch (action.type) {
    case types.SET_CALLSTATE:
      return action.callState
    case types.SELECT_ISSUE:
      return {...state, currentIssueId: action.id}
    case types.MOVE_TO_NEXT_CONTACT:
      let newIndices = {...state.contactIndices};
      if (!newIndices[state.currentIssueId]){
        newIndices[state.currentIssueId] = 1;
      } else {
        newIndices[state.currentIssueId]++;
      }
      return {...state, contactIndices: newIndices}
    case types.COMPLETE_ISSUE:
      let newCompletedIssues = [...state.completedIssues];
      newCompletedIssues.push(action.id);
      let newState = {...state };
      newState.completedIssues = newCompletedIssues;
      return newState;
    case types.RESET_ISSUES: {
      return {...state, contactIndices: {}, completedIssues:[], currentIssueId: null}
    }
    default:
      return state
  }
}
