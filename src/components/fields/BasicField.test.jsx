import React from 'react';
import * as ReactRedux from 'react-redux';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import BasicField from './BasicField';

Enzyme.configure({ adapter: new Adapter() });

describe('BasicField', () => {
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
      form_name: 'Name',
    };

    const wrapper = render(
      <BasicField
        field={{
          name: 'name',
        }}
        type="text"
        t={t}
      />,
    );

    expect(wrapper.text()).toMatch('Name');
    expect(wrapper.html()).toMatch('<input type="text"');
  });
});
