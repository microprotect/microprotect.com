import React from 'react';
import * as ReactRedux from 'react-redux';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PhoneField from './PhoneField';

Enzyme.configure({ adapter: new Adapter() });

describe('PhoneField', () => {
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
      form_phoneNumber: 'Phone number',
    };

    const wrapper = render(
      <PhoneField
        field={{
          name: 'phoneNumber',
        }}
        t={t}
      />,
    );

    expect(wrapper.text()).toMatch('Phone number');
    expect(wrapper.html()).toMatch('<input type="tel"');
  });
});
