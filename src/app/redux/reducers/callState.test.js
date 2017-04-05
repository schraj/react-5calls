import { callState } from './callState'
import * as types from '../actions/types'

describe('callState reducer', () => {
  it('should return the initial state', () => {
    expect(
      callState(undefined, {})
    ).toEqual({})
  })

  it('should handle SET_CALLSTATE when it has not yet been initialized', () => {
    const cs = {
      currentIssueId: null,
      contactIndices: {},
      completedIssues: []
    }
    expect(
      callState({}, {
        type: types.SET_CALLSTATE,
        callState: cs
      })
    ).toEqual(cs)
  })

 it('should handle SET_CALLSTATE when callState is already initialized', () => {
    const initialState = {
      currentIssueId: '',
      contactIndices: {},
      completedIssues: []
    }

    // make a change to callstate and dispatch that change
    const cs = {
      currentIssueId: 'fakeId',
      contactIndices: {'fakeId': 1},
      completedIssues: []
    }
    expect(
      callState(initialState, {
        type: types.SET_CALLSTATE,
        callState: cs
      })
    ).toEqual(cs)
  })

  it('should set issue id when SELECT_ISSUE is executed', () => {
    let id = 'fakeId';
    const result = callState([], {
        type: types.SELECT_ISSUE,
        id: id
    })
    expect(result.currentIssueId).toEqual(id)
  })

  it('should update issue id but leave other properties when SELECT_ISSUE is executed and issueId is already set', () => {
    const contactIndices = {'firstId': 1}; 
    const initialState = {
      currentIssueId: 'firstId',
      contactIndices: contactIndices,
      completedIssues: []
    }

    let id = 'fakeId';
    const result = callState(initialState, {
        type: types.SELECT_ISSUE,
        id: id
    })
    expect(result.currentIssueId).toEqual(id)
    expect(result.contactIndices).toEqual(contactIndices)
  })
})