import React from 'react';
import * as ReactRedux from 'react-redux';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TextField from './TextField';

Enzyme.configure({ adapter: new Adapter() });

describe('TextField', () => {
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
    const wrapper = render(
      <TextField name="name" label="Name" type="text" />,
    );
    expect(wrapper.text())
      .toMatch('Name');
    expect(wrapper.html())
      .toMatch('<input type="text"');
  });
});
