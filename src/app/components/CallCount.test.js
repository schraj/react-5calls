import React from 'react';
import {shallow} from 'enzyme';
import CallCount from './CallCount';

it('renders total calls to text', () => {
  const totalCalls = 100;
  const callCountWidget = shallow(CallCount(totalCalls));
  var h2 = callCountWidget.find('h2');
  expect(h2.text()).toContain('100');
});
