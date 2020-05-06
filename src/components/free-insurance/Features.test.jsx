import React from 'react';
import { render } from '@testing-library/react';

import Features from './Features';

jest.mock('../../assets/v4');

describe('Features', () => {
  it('renders features', () => {
    const t = {
      insurance_feature_title3: 'Free to join and terminate.',
      insurance_feature_description3: 'For other insurance programs, ...',
    };

    const { container } = render(<Features t={t} />);

    expect(container).toHaveTextContent('Free to join and terminate.');
    expect(container).toHaveTextContent('For other insurance programs,');
  });
});
