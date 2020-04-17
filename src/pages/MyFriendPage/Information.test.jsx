import React from 'react';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Information from './Information';

jest.mock('../../assets');

Enzyme.configure({ adapter: new Adapter() });

describe('Information', () => {
  it('renders title', () => {
    const t = {
      myfriend_description: '마이프렌드',
    };

    const wrapper = render(<Information t={t} />);

    expect(wrapper.text()).toMatch('마이프렌드');
  });
});
