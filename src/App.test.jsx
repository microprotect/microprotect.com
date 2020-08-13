import React from 'react';
import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');
jest.mock('./assets');
jest.mock('./assets/v4');
jest.mock('./assets/v5');

describe('App', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      t: {
        v5_slogan1: '당신이 보호받으면 세상도 함께 보호받습니다',
      },
      locale: 'ko',
    }));
  });

  it('renders home page', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('당신이 보호받으면 세상도 함께 보호받습니다');
  });
});
