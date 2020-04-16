/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import { KakaoTalkChannelImage } from '../assets';

const styles = {
  container: {
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
  },
  image: {
    display: 'block',
    width: '100%',
    height: '100%',
  },
};

export default function ChatBubble({ type = 'kakaotalk-chat' }) {
  const handleClick = () => {
    window.postMessage({ type }, '*');
  };

  return (
    <button
      css={styles.container}
      type="button"
      onClick={handleClick}
    >
      <img
        css={styles.image}
        src={KakaoTalkChannelImage}
        alt="KakaoTalk"
      />
    </button>
  );
}
