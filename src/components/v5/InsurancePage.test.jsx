import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import * as ReactRedux from 'react-redux';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import InsurancePage from './InsurancePage';

jest.mock('../../assets');
jest.mock('../../assets/v5');

Enzyme.configure({ adapter: new Adapter() });

describe('InsurancePage', () => {
  beforeEach(() => {
    jest
      .spyOn(ReactRedux, 'useSelector')
      .mockImplementation(() => ({
        tester: true,
      }));
  });

  it('renders introduction', () => {
    const t = {
      insurance_information_title: '보험정보',
    };

    const wrapper = render(
      <Router>
        <InsurancePage t={t} product="carediscover" />
      </Router>,
    );

    expect(wrapper.text()).toMatch('보험정보');
    expect(wrapper.text()).toMatch('가입하기');
  });
});
