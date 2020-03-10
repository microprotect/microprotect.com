import React from 'react';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Note from './Note';

Enzyme.configure({ adapter: new Adapter() });

describe('Note', () => {
  it('renders text', () => {
    const t = {
      form_note_agreement: 'Agreement',
    };

    const wrapper = render(
      <Note
        field={{
          name: 'agreement',
        }}
        t={t}
      />,
    );

    expect(wrapper.text()).toMatch('Agreement');
  });
});
