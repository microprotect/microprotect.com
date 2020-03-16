import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PartnersPage from './index';

jest.mock('../../assets');
jest.mock('../../assets/v5');

Enzyme.configure({ adapter: new Adapter() });

describe('AboutPage', () => {
  it('renders partners', () => {
    const t = {
      partner_title_truebalance: '밸런스 히어로',
    };

    const wrapper = render(
      <Router>
        <PartnersPage t={t} />
      </Router>,
    );

    expect(wrapper.text()).toMatch('밸런스 히어로');
  });
});
