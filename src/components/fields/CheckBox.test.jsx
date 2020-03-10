import React from 'react';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CheckBox from './CheckBox';

jest.mock('../../assets');

Enzyme.configure({ adapter: new Adapter() });

describe('CheckBox', () => {
  it('renders options', () => {
    const t = {
      form_check: 'Check!',
    };

    const wrapper = render(
      <CheckBox
        field={{
          name: 'check',
          value: 'yes',
        }}
        t={t}
      />,
    );

    expect(wrapper.text()).toMatch('Check!');
  });
});
