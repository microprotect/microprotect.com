import React from 'react';
import { render } from '@testing-library/react';

import ListContainer from './ListContainer';
import ListItem from './ListItem';

describe('ListContainer', () => {
  const items = [
    { id: 1, name: 'Jayde Duke' },
    { id: 2, name: 'Aniyah Kelley' },
    { id: 3, name: 'Otis Whitmore' },
  ];

  it('renders items', () => {
    const { container } = render(
      <ListContainer>
        {items.map((item) => (
          <ListItem key={item.id}>
            {item.name}
          </ListItem>
        ))}
      </ListContainer>,
    );
    expect(container).toHaveTextContent('Jayde Duke');
    expect(container).toHaveTextContent('Aniyah Kelley');
  });
});
