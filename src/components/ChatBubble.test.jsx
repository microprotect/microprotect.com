import React from 'react';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ChatBubble from './ChatBubble';

jest.mock('../assets');

Enzyme.configure({ adapter: new Adapter() });

describe('ChatBubble', () => {
  it('renders text', () => {
    const wrapper = render(<ChatBubble />);

    expect(wrapper.html()).toContain('KakaoTalk');
  });
});
