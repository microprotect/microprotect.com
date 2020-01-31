/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import {
  BASE_MQ,
  white,
} from '../../styles/constants-v4';

const styles = {
  container: {
    padding: '8vw',
    fontSize: '3.5vw',
    background: white,
    boxShadow: '2px 2px 10px 0 rgba(200, 200, 200, 0.5)',
    [BASE_MQ]: {
      padding: '2em',
      fontSize: '1em',
    },
  },
};

export default function Box({ style, children }) {
  return (
    <div css={[styles.container, style]}>
      {children}
    </div>
  );
}
