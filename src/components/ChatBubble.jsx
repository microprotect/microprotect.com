/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import { KakaoTalkChannelImage } from '../assets';

const styles = {
  container: {
    position: 'fixed',
    right: '20px',
    bottom: '20px',
  },
  image: {
    display: 'block',
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    boxShadow: '2px 2px 10px 0 rgba(200, 200, 200, 0.5)',
  },
};

export default function ChatBubble() {
  return (
    <a
      css={styles.container}
      href="https://pf.kakao.com/_MIvxjxb/chat"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        css={styles.image}
        src={KakaoTalkChannelImage}
        alt="KakaoTalk"
      />
    </a>
  );
}
