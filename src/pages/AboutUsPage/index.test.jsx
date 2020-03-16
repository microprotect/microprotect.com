import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AboutUsPage from './index';

jest.mock('../../assets');
jest.mock('../../assets/v5');

Enzyme.configure({ adapter: new Adapter() });

describe('AboutPage', () => {
  it('renders name', () => {
    const t = {
      member_name1: '권상민',
    };

    const wrapper = render(
      <Router>
        <AboutUsPage t={t} />
      </Router>,
    );

    expect(wrapper.text()).toMatch('권상민');
  });
});
