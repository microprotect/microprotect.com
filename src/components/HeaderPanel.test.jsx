import React from 'react';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HeaderPanel from './HeaderPanel';

Enzyme.configure({ adapter: new Adapter() });

describe('HeaderPanel', () => {
  it('renders <div> tag', () => {
    const wrapper = shallow(
      <HeaderPanel />,
    );

    expect(wrapper.html()).toMatch('<div');
  });
});
