import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MyFriendPage from './index';

jest.mock('../../assets');
jest.mock('../../assets/v5');

Enzyme.configure({ adapter: new Adapter() });

describe('MyFriendPage', () => {
  it('renders title', () => {
    const t = {
      myfriend_title: '마이프렌드',
    };

    const wrapper = render(
      <Router>
        <MyFriendPage t={t} />
      </Router>,
    );

    expect(wrapper.text()).toMatch('마이프렌드');
  });
});
