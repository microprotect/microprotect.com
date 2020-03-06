import React from 'react';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ComboBox from './ComboBox';

Enzyme.configure({ adapter: new Adapter() });

describe('ComboBox', () => {
  it('renders options', () => {
    const wrapper = render(
      <ComboBox
        name="select"
        label="Select!"
        options={[
          { label: 'Option#1', value: '1' },
          { label: 'Option#2', value: '2' },
        ]}
      />,
    );
    expect(wrapper.text()).toMatch('Select!');
    expect(wrapper.text()).toMatch('Option#1');
    expect(wrapper.text()).toMatch('Option#2');
  });
});
