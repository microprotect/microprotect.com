import React from 'react';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Features from './Features';

jest.mock('../../assets/v4');

Enzyme.configure({ adapter: new Adapter() });

describe('Features', () => {
  const t = {
    insurance_feature_title3: 'Free to join and terminate.',
    insurance_feature_description3: 'For other insurance programs, ...',
  };

  it('renders features', () => {
    const wrapper = render(
      <Features t={t} />,
    );
    expect(wrapper.text()).toMatch('Free to join and terminate.');
    expect(wrapper.text()).toMatch('For other insurance programs,');
  });
});
