import { render } from '@testing-library/react';

import IndexPage from '../../pages/index';

jest.mock('../../assets');

describe('IndexPage', () => {
  it('renders without crash', () => {
    render(<IndexPage />);
  });
});
