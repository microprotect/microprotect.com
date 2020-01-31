import React from 'react';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ListContainer from './ListContainer';
import ListItem from './ListItem';

Enzyme.configure({ adapter: new Adapter() });

describe('ListContainer', () => {
  const items = [
    { id: 1, name: 'Jayde Duke' },
    { id: 2, name: 'Aniyah Kelley' },
    { id: 3, name: 'Otis Whitmore' },
  ];

  it('renders items', () => {
    const wrapper = render(
      <ListContainer>
        {items.map((item) => (
          <ListItem key={item.id}>
            {item.name}
          </ListItem>
        ))}
      </ListContainer>,
    );
    expect(wrapper.text()).toMatch('Jayde Duke');
    expect(wrapper.text()).toMatch('Aniyah Kelley');
  });
});
