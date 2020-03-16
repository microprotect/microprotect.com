import React from 'react';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Partners from './Partners';

Enzyme.configure({ adapter: new Adapter() });

describe('Partners', () => {
  const t = {
    partner_title_truebalance: 'Balance Hero',
  };

  it('renders partners', () => {
    const wrapper = render(
      <Partners t={t} />,
    );
    expect(wrapper.text()).toMatch('Balance Hero');
  });
});
