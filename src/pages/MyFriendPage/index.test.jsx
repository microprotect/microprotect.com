import React from 'react';
import { render } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import MyFriendPage from './index';

jest.mock('../../assets');
jest.mock('../../assets/v5');

describe('MyFriendPage', () => {
  it('renders title', () => {
    const t = {
      myfriend_title: '마이프렌드',
    };

    const { container } = render(
      <Router>
        <MyFriendPage t={t} />
      </Router>,
    );

    expect(container).toHaveTextContent('마이프렌드');
  });
});
