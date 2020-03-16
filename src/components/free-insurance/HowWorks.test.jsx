import React from 'react';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HowWorks from './HowWorks';

jest.mock('../../assets/v4');

Enzyme.configure({ adapter: new Adapter() });

describe('HowWorks', () => {
  const t = {
    how_works1: 'Donation',
    how_works2: 'Profit',
    how_works3: 'Microprotect',
    how_works4: 'Free Insurance',
  };

  it('renders partners', () => {
    const wrapper = render(
      <HowWorks t={t} />,
    );

    expect(wrapper.text()).toMatch('Donation');
    expect(wrapper.text()).toMatch('Profit');
    expect(wrapper.text()).toMatch('Microprotect');
    expect(wrapper.text()).toMatch('Free Insurance');
  });
});
