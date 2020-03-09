import React from 'react';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Index from './index';

jest.mock('../../assets');

Enzyme.configure({ adapter: new Adapter() });

describe('Index', () => {
  it('renders options', () => {
    const wrapper = render(
      <div>
        <Index value="(V)\n_(100%)_" />
      </div>,
    );
    expect(wrapper.html()).toMatch('<img ');
    expect(wrapper.html()).toMatch('>(100%)</small>');
  });
});
