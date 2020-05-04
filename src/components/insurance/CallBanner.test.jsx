import React from 'react';
import { render } from '@testing-library/react';

import CallBanner from './CallBanner';

jest.mock('../../assets');

describe('InsuranceCallBanner', () => {
  const t = {};

  describe('with Care Discover', () => {
    it('renders nothing', () => {
      const { container } = render(
        <CallBanner t={t} product="carediscover" />,
      );

      expect(container).not.toHaveTextContent('4850');
    });
  });

  describe('with private insurance', () => {
    it('renders phone number', () => {
      const { container } = render(
        <CallBanner t={t} product="privateinsurance" />,
      );

      expect(container).toHaveTextContent('0151-2622-4850');
    });
  });
});
