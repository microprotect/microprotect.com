import React from 'react';
import { render } from '@testing-library/react';

import GridList from './GridList';

describe('GridList', () => {
  const items = [
    { id: 1, name: 'Jayde Duke' },
    { id: 2, name: 'Aniyah Kelley' },
    { id: 3, name: 'Otis Whitmore' },
  ];

  describe('without “limit” attribute', () => {
    it('renders items', () => {
      const { container } = render((
        <GridList
          items={items}
          render={(item) => <p>{item.name}</p>}
        />
      ));

      expect(container).toHaveTextContent('Jayde Duke');
      expect(container).toHaveTextContent('Aniyah Kelley');
      expect(container).not.toHaveTextContent('See more');
    });
  });

  describe('with “limit” attribute', () => {
    it('renders items and “See more” button', () => {
      const { container } = render((
        <GridList
          limit={2}
          items={items}
          render={(item) => <p>{item.name}</p>}
          renderMore={() => <p>See more</p>}
        />
      ));

      expect(container).toHaveTextContent('Jayde Duke');
      expect(container).toHaveTextContent('Aniyah Kelley');
      expect(container).toHaveTextContent('See more');
    });
  });
});
