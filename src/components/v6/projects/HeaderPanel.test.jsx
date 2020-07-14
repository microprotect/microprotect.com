import React from 'react';

import { render } from '@testing-library/react';

import HeaderPanel from './HeaderPanel';

jest.mock('../../../assets');

describe('HeaderPanel', () => {
  it('renders title', () => {
    const { container } = render((
      <HeaderPanel
        title="Self-employed insurance"
        partner="Partner Korea Credit Data (KCD)"
        image=""
      />
    ));

    expect(container).toHaveTextContent('Self-employed insurance');
    expect(container).toHaveTextContent('Partner Korea Credit Data (KCD)');
  });
});
