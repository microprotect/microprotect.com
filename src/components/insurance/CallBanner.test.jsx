import React from 'react';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CallBanner from './CallBanner';

jest.mock('../../assets');

Enzyme.configure({ adapter: new Adapter() });

describe('InsuranceCallBanner', () => {
  const t = {};

  describe('with Care Discover', () => {
    it('renders nothing', () => {
      const wrapper = render(
        <CallBanner t={t} product="carediscover" />,
      );

      expect(wrapper.text()).not.toMatch('4850');
    });
  });

  describe('with private insurance', () => {
    it('renders phone number', () => {
      const wrapper = render(
        <CallBanner t={t} product="privateinsurance" />,
      );

      expect(wrapper.text()).toMatch('06196-7691774');
    });
  });
});
