import React from 'react';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HeaderPanel from './HeaderPanel';

jest.mock('../../assets');

Enzyme.configure({ adapter: new Adapter() });

describe('HeaderPanel', () => {
  it('renders title', () => {
    const t = {
      myfriend_title: '마이프렌드',
    };

    const wrapper = render(<HeaderPanel t={t} />);

    expect(wrapper.text()).toMatch('마이프렌드');
  });
});
