import React from 'react';

import styled from '@emotion/styled';

import { KakaoTalkChannelImage } from '../assets';

const Button = styled.button({
  zIndex: 1000,
  position: 'fixed',
  right: '20px',
  bottom: '20px',
  margin: 0,
  padding: 0,
  width: '64px',
  height: '64px',
  border: 0,
  borderRadius: '50%',
  boxShadow: '2px 2px 10px 0 rgba(200, 200, 200, 0.5)',
  cursor: 'pointer',
});

const Image = styled.img({
  display: 'block',
  width: '100%',
  height: '100%',
});

export default function ChatBubble({ type = 'kakaotalk-chat' }) {
  const handleClick = () => {
    window.postMessage({ type }, '*');
  };

  return (
    <Button
      type="button"
      onClick={handleClick}
    >
      <Image
        src={KakaoTalkChannelImage}
        alt="KakaoTalk"
      />
    </Button>
  );
}
