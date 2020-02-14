import React from 'react';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import RadioButton from './RadioButton';

Enzyme.configure({ adapter: new Adapter() });

describe('RadioButton', () => {
  it('renders options', () => {
    const wrapper = render(
      <RadioButton
        name="select"
        label="Select!"
        options={['Option#1', 'Option#2']}
      />,
    );
    expect(wrapper.html()).toMatch('name="select"');
    expect(wrapper.text()).toMatch('Select!');
    expect(wrapper.text()).toMatch('Option#1');
    expect(wrapper.text()).toMatch('Option#2');
  });
});
