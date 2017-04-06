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

    xit('should add invalid text when invalidAddress is true in props', () => {
      const { enzymeWrapper, props } = setup({invalidAddress: true})
      const addressButton = enzymeWrapper.find('button#btnInvalidAddress')
      expect(addressButton.text()).toContain('invalid')
    })

    xit('should show the submit address button when askingLocation is true', () => {
      var propOverrides = {
        locationProcessing: {
          askingLocation: true
        }
      }
      const { enzymeWrapper, props } = setup(propOverrides)
      const frmSubmitLocation = enzymeWrapper.find('form')
      expect(frmSubmitLocation.hasClass('hidden')).toBe(false);      

      const submitButton = enzymeWrapper.find('button#btnSubmitLocation')
      expect(submitButton.length).toBe(1);      
      expect(submitButton.text()).toBe("Go");            
    })

    xit('should call onEnterLocation when a choose-location related button is clicked', () => {
      const { enzymeWrapper, props } = setup({invalidAddress: true})
      const addressButton = enzymeWrapper.find('button#btnInvalidAddress')
      expect(props.onEnterLocation.mock.calls.length).toBe(0);
      addressButton.simulate('click');
      expect(props.onEnterLocation.mock.calls.length).toBe(1);
    })

    xit('should add value to component state when text box is updated', () => {
      var propOverrides = {
        locationProcessing: {
          askingLocation: true
        }
      }
      const { enzymeWrapper, props } = setup(propOverrides)

      const newAddress = '98502';
      const addressInput = enzymeWrapper.find('input#address')
      addressInput.simulate('change', { target: { value: newAddress } })
      expect(enzymeWrapper.instance().state.address).toBe(newAddress)
    })

    xit('should call setLocation when submit button is clicked', () => {
      var propOverrides = {
        locationProcessing: {
          askingLocation: true
        }
      }
      const { enzymeWrapper, props } = setup(propOverrides)
      const addressInput = enzymeWrapper.find('input#address')
      addressInput.simulate('change', { target: { value: '98502' } })

      const submitButton = enzymeWrapper.find('button#btnSubmitLocation')
      expect(submitButton.length).toBe(1);  
      expect(props.setLocation.mock.calls.length).toBe(0);
      submitButton.simulate('click');
      expect(props.setLocation.mock.calls.length).toBe(1);
    })
  })
})