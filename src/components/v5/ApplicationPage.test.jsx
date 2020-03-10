import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import * as ReactRedux from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ApplicationPage from './ApplicationPage';

import { ko as t } from '../../locales.json';

jest.mock('../../assets');
jest.mock('../../assets/v5');

Enzyme.configure({ adapter: new Adapter() });

describe('ApplicationPage', () => {
  beforeEach(() => {
    jest
      .spyOn(ReactRedux, 'useSelector')
      .mockImplementation(() => () => {
      });

    jest
      .spyOn(ReactRedux, 'useDispatch')
      .mockImplementation(() => () => {
      });
  });

  it('renders introduction', () => {
    const wrapper = render(
      <Router>
        <ApplicationPage t={t} product="carediscover" />
      </Router>,
    );

    expect(wrapper.text()).toMatch('last name');
  });
});
