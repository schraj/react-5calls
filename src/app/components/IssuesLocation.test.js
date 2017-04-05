import React from 'react'
import { shallow } from 'enzyme'
import IssueLocation from './IssuesLocation'

function setup(props) {
  const defaultProps = {
    callState: {},
    locationInfo: {},
    invalidAddress: false,
    locationProcessing: {},
    isDebug: false,
    resetLocation: jest.fn(),
    setLocation: jest.fn(),
    onEnterLocation: jest.fn()
  }


  const merged = Object.assign(defaultProps, props);

  const enzymeWrapper = shallow(<IssueLocation {...merged} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('IssueLocation', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()

      expect(enzymeWrapper.find('div').hasClass('issues__location')).toBe(true)
    })

    it('should add invalid text when invalidAddress is true in props', () => {
      const { enzymeWrapper, props } = setup({invalidAddress: true})
      const addressButton = enzymeWrapper.find('button#btnInvalidAddress')
      expect(addressButton.text()).toContain('invalid')
    })

    it('should show the submit address button when askingLocation is true', () => {
      var propOverrides = {
        locationProcessing: {
          askingLocation: true
        }
      }
      const { enzymeWrapper, props } = setup(propOverrides)
      const hiddenSubmitButton = enzymeWrapper.find('button.hidden')
      expect(hiddenSubmitButton.length).toBe(0);      

      const submitButton = enzymeWrapper.find('button#btnSubmitLocation')
      expect(submitButton.length).toBe(1);      
      expect(submitButton.text()).toBe("Go");            
    })

    it('should show the submit address button when askingLocation is true', () => {
      var propOverrides = {
        locationProcessing: {
          askingLocation: true
        }
      }
      const { enzymeWrapper, props } = setup(propOverrides)
      const hiddenSubmitButton = enzymeWrapper.find('button.hidden')
      expect(hiddenSubmitButton.length).toBe(0);      

      const submitButton = enzymeWrapper.find('button#btnSubmitLocation')
      expect(submitButton.length).toBe(1);      
      expect(submitButton.text()).toBe("Go");            
    })
  })
})