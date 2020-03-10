import React from 'react';
import * as ReactRedux from 'react-redux';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DateField from './DateField';

Enzyme.configure({ adapter: new Adapter() });

describe('DateField', () => {
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
      form_birthDate: 'Birth date',
    };

    const wrapper = render(
      <DateField
        field={{
          name: 'birthDate',
        }}
        t={t}
      />,
    );

    expect(wrapper.text()).toMatch('Birth date');
    expect(wrapper.html()).toMatch('<input type="date"');
  });
});
