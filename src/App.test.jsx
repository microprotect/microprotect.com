import React from 'react';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import * as ReactRedux from 'react-redux';
import configureMockStore from 'redux-mock-store';

import App from './App';

jest.mock('./assets');

Enzyme.configure({ adapter: new Adapter() });

const store = configureMockStore()({
  t: {
    address: 'Address',
  },
  locale: 'ko',
});

beforeEach(() => {
  jest
    .spyOn(ReactRedux, 'useSelector')
    .mockImplementation(() => store.getState());

  jest
    .spyOn(ReactRedux, 'useDispatch')
    .mockImplementation(() => () => {});
});

it('renders home page', () => {
  const wrapper = render(<App store={store} />);
  expect(wrapper.text()).toMatch('Secure more people equally');
});
