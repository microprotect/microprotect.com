import React from 'react';

import { changeLocale } from 'gatsby-plugin-intl';

import { fireEvent } from '@testing-library/react';

import { render } from '../../utils/test-intl';

import Header from './Header';

jest.mock('gatsby');
jest.mock('gatsby-plugin-intl');
jest.mock('../../assets');

describe('Header', () => {
  it('renders logo', () => {
    const { container } = render(<Header />);

    expect(container).toHaveTextContent('Microprotect');
  });

  context('when user clicks a language link', () => {
    it('change locale', () => {
      const { getByText } = render(<Header />);

      fireEvent.click(getByText('KR'));

      expect(changeLocale).toBeCalledWith('ko');
    });
  });

  context('when user scrolls down', () => {
    it('change locale', () => {
      render(<Header />);

      fireEvent.scroll(window, {
        scrollY: 100,
      });

      expect(changeLocale).toBeCalledWith('ko');
    });
  });
});
