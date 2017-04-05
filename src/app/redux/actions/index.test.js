import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

import * as actions from './index'
import * as types from './types'

describe('actions', () => {
  it('should create action to set isdebug flag', () => {
    const isDebug = true;
    const expectedAction = {
      type: types.SET_ISDEBUG,
      isDebug: true
    }
    expect(actions.setIsDebug(isDebug)).toEqual(expectedAction)
  })

  it('should create action to set issue', () => {
    const issueId = 'fakeid';
    const expectedAction = {
      type: types.SELECT_ISSUE,
      id: issueId
    }
    expect(actions.selectIssue(issueId)).toEqual(expectedAction)
  })

})

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates FETCH_ISSUES_SUCCESS when fetching issues has been done', () => {
    nock('https://5calls.org')
      .get('/issues/?address=98502')
      .reply(200, { body: { issues: ['object'] }})

    const expectedActions = [
      { type: types.FETCH_ISSUES_REQUEST },
      { type: types.FETCH_ISSUES_SUCCESS, body: { issues: ['object']  } }
    ]
    const store = mockStore({ remoteData: {} })

    return store.dispatch(actions.fetchTodos())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})