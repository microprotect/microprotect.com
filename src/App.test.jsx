import React from 'react';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import * as ReactRedux from 'react-redux';
import configureMockStore from 'redux-mock-store';

import App from './App';

jest.mock('./assets');
jest.mock('./assets/v4');
jest.mock('./assets/v5');

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

  given('store', () => configureMockStore()({
    t: {
      v5_slogan1: '당신이 보호받으면 세상도 함께 보호받습니다',
    },
    locale: 'ko',
  }));

  it('renders home page', () => {
    const wrapper = render(<App store={given.store} />);
    expect(wrapper.text())
      .toMatch('당신이 보호받으면');
  });
});
