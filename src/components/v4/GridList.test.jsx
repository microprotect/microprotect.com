import React from 'react';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import GridList from './GridList';

Enzyme.configure({ adapter: new Adapter() });

describe('GridList', () => {
  const items = [
    { id: 1, name: 'Jayde Duke' },
    { id: 2, name: 'Aniyah Kelley' },
    { id: 3, name: 'Otis Whitmore' },
  ];

  describe('without “renderMore” attribute', () => {
    it('renders items', () => {
      const wrapper = render(
        <GridList
          items={items}
          render={(item) => <p>{item.name}</p>}
        />,
      );
      expect(wrapper.text()).toMatch('Jayde Duke');
      expect(wrapper.text()).toMatch('Aniyah Kelley');
    });
  });

  describe('with “renderMore” attribute', () => {
    it('renders items', () => {
      const wrapper = render(
        <GridList
          items={items}
          render={(item) => <p>{item.name}</p>}
          renderMore={() => <p>See more</p>}
        />,
      );
      expect(wrapper.text()).toMatch('Jayde Duke');
      expect(wrapper.text()).toMatch('Aniyah Kelley');
      expect(wrapper.text()).toMatch('See more');
    });
  });
});
