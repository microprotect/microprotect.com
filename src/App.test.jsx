import React from 'react';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import * as ReactRedux from 'react-redux';
import configureMockStore from 'redux-mock-store';

import App from './App';

jest.mock('./assets');

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  beforeEach(() => {
    jest
      .spyOn(ReactRedux, 'useSelector')
      .mockImplementation(() => given.store.getState());

    jest
      .spyOn(ReactRedux, 'useDispatch')
      .mockImplementation(() => () => {
      });
  });

  describe('with old website', () => {
    given('store', () => configureMockStore()({
      t: {
        subscribe1: 'Hello,\nworld!',
        address: 'Address',
      },
      locale: 'ko',
      isNew: false,
    }));

    it('renders home page', () => {
      const wrapper = render(<App store={given.store} />);
      expect(wrapper.text())
        .toMatch('Secure more people equally');
    });
  });

  describe('with new website', () => {
    given('store', () => configureMockStore()({
      t: {
        subscribe1: 'Hello,\nworld!',
        address: 'Address',
      },
      locale: 'ko',
      isNew: false,
    }));

    it('renders home page', () => {
      const wrapper = render(<App store={given.store} />);
      expect(wrapper.text())
        .toMatch('Secure more people equally');
    });
  });
});
