import React from 'react';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import * as ReactRedux from 'react-redux';
import configureMockStore from 'redux-mock-store';

import App from './App';

jest.mock('./assets');
jest.mock('./assets/v4');

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

  describe('with version 1', () => {
    given('store', () => configureMockStore()({
      t: {},
      locale: 'ko',
      version: 1,
    }));

    it('renders home page', () => {
      const wrapper = render(<App store={given.store} />);
      expect(wrapper.text())
        .toMatch('Secure more people equally');
    });
  });

  describe('with version 2', () => {
    given('store', () => configureMockStore()({
      t: {},
      locale: 'ko',
      version: 2,
    }));

    it('renders home page', () => {
      const wrapper = render(<App store={given.store} />);
      expect(wrapper.text())
        .toMatch('Secure more people equally');
    });
  });

  describe('with version 3', () => {
    given('store', () => configureMockStore()({
      t: {},
      locale: 'ko',
      version: 3,
    }));

    it('renders home page', () => {
      const wrapper = render(<App store={given.store} />);
      expect(wrapper.text())
        .toMatch('Secure more people equally');
    });
  });

  describe('with version 4', () => {
    given('store', () => configureMockStore()({
      t: {},
      locale: 'ko',
      version: 4,
    }));

    it('renders home page', () => {
      const wrapper = render(<App store={given.store} />);
      expect(wrapper.text())
        .toMatch('Secure more people equally');
    });
  });

  describe('with version 5', () => {
    given('store', () => configureMockStore()({
      t: {},
      locale: 'ko',
      version: 5,
    }));

    it('renders application form', () => {
      const wrapper = render(<App store={given.store} />);
      expect(wrapper.text()).toMatch('First name');
      expect(wrapper.text()).toMatch('E-mail');
      expect(wrapper.text()).toMatch('Country');
      expect(wrapper.text()).toMatch('Send application');
    });
  });
});
