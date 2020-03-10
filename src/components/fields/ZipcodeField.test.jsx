import React from 'react';
import * as ReactRedux from 'react-redux';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ZipcodeField from './ZipcodeField';

Enzyme.configure({ adapter: new Adapter() });

describe('ZipcodeField', () => {
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

  it('renders label & input control & search button', () => {
    const t = {
      form_zipCode: 'Zip code',
    };

    const wrapper = render(
      <ZipcodeField
        field={{
          name: 'zipCode',
        }}
        t={t}
      />,
    );

    expect(wrapper.text()).toMatch('Zip code');
    expect(wrapper.html()).toMatch('<input type="number"');
    expect(wrapper.html()).toMatch('<button');
  });
});
