import React from 'react';
import * as ReactRedux from 'react-redux';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CreditCardField from './CreditCardField';

Enzyme.configure({ adapter: new Adapter() });

describe('CreditCardField', () => {
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
      form_cardNumber: 'Credit card number',
    };

    const wrapper = render(
      <CreditCardField
        field={{
          name: 'cardNumber',
        }}
        t={t}
      />,
    );

    expect(wrapper.text()).toMatch('Credit card number');
    expect(wrapper.html()).toMatch('<input type="number"');
    expect(wrapper.html()).toMatch('<input type="password"');
  });
});
