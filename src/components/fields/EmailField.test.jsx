import React from 'react';
import * as ReactRedux from 'react-redux';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import EmailField from './EmailField';

Enzyme.configure({ adapter: new Adapter() });

describe('EmailField', () => {
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

  it('renders label & input control', () => {
    const t = {
      form_email: 'E-mail',
    };

    const wrapper = render(
      <EmailField
        field={{
          name: 'email',
        }}
        t={t}
      />,
    );

    expect(wrapper.text()).toMatch('E-mail');
    expect(wrapper.html()).toMatch('<input type="email"');
  });
});
