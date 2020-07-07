/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import {
  BASE_MQ,
  black,
} from '../../styles/constants-v5';

const styles = {
  button: {
    zIndex: 10000,
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100vw',
    height: '90px',
    lineHeight: '90px',
    border: 0,
    boxShadow: '0 0 20px 0 rgba(180, 180, 180, 0.5)',
    backgroundColor: '#FDE104',
    color: black,
    fontSize: '1.5em',
    fontWeight: 'bold',
    [BASE_MQ]: {
      display: 'none',
    },
  },
};

export default function ApplicationButton({ t }) {
  const handleClick = () => {
    window.postMessage({ type: 'myfriend-chat' }, '*');
  };

  return (
    <button
      type="button"
      css={styles.button}
      onClick={handleClick}
    >
      {t.myfriend_request_button}
    </button>
  );
}
