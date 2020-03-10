import React from 'react';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Line from './Line';

Enzyme.configure({ adapter: new Adapter() });

describe('Line', () => {
  it('renders line', () => {
    const wrapper = shallow(<Line />);

    expect(wrapper.html()).toMatch('<div');
  });
});
