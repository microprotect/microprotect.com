import React from 'react';
import { render } from '@testing-library/react';

import ChatBubble from './ChatBubble';

jest.mock('../assets');

describe('ChatBubble', () => {
  it('renders text', () => {
    const { container } = render(<ChatBubble />);

    expect(container).toContainHTML('KakaoTalk');
  });
});
