import React from 'react'
import { shallow, mount } from 'enzyme'
import IssueLocation from './Call'

import data from '../redux/testdata/issues.json'

function setup(overrides) {
  let defaultProps = {
    issues: data.issues,
    callState: {
      currentIssueId: "recNGBGmFPargzipE",
      contactIndices: {},
      completedIssues: []
    },
    splitDistrict: false,
    locationInfo: {},
    onSubmitOutcome: jest.fn(),
    onEnterLocation: jest.fn()
  }

  const props = Object.assign({}, defaultProps, overrides);

  const enzymeWrapper = shallow(<IssueLocation {...props} />)  
  //const enzymeWrapper = mount(<IssueLocation {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Call', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()
      expect(enzymeWrapper.find('section').hasClass('call')).toBe(true)
    })
  })
})