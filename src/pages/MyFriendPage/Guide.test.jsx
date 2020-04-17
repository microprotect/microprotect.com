import React from 'react';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Guide from './Guide';

jest.mock('../../assets');

Enzyme.configure({ adapter: new Adapter() });

describe('Guide', () => {
  it('renders title', () => {
    const t = {};

    const wrapper = mount(<Guide t={t} />);

    expect(wrapper.html()).toMatch('<img ');
  });
});
