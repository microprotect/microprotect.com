import React from 'react';
import { render } from '@testing-library/react';

import RadioButton from './RadioButton';

jest.mock('../assets');

describe('RadioButton', () => {
  it('renders options', () => {
    const t = {
      form_select: 'Select!',
      form_select_1: 'Option#1',
      form_select_2: 'Option#2',
    };

    const { container } = render(
      <RadioButton
        field={{
          name: 'select',
          options: ['1', '2'],
        }}
        t={t}
      />,
    );

    expect(container).toContainHTML('name="select"');
    expect(container).toHaveTextContent('Select!');
    expect(container).toHaveTextContent('Option#1');
    expect(container).toHaveTextContent('Option#2');
  });
});
