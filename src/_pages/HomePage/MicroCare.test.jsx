import React from 'react';
import { render } from '@testing-library/react';

import MicroCare from './MicroCare';

jest.mock('../../assets/v5');

describe('MicroCare', () => {
  it('renders carousel', () => {
    const t = {
      microcare_service1_title: '카카오톡 안내·보험금 청구대행 서비스',
    };

    const { container } = render(<MicroCare t={t} />);

    expect(container).toHaveTextContent('보험금 청구대행 서비스');
  });
});
