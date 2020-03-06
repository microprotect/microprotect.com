import React from 'react';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CheckBox from './CheckBox';

jest.mock('../assets');

Enzyme.configure({ adapter: new Adapter() });

describe('CheckBox', () => {
  it('renders options', () => {
    const wrapper = render(
      <CheckBox
        name="check"
        label="Check!"
        value="yes"
      />,
    );
    expect(wrapper.text()).toMatch('Check!');
  });
});
