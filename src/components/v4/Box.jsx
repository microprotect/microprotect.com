/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import {
  BASE_MQ,
  white,
} from '../../styles/constants-v4';

const styles = {
  container: {
    fontSize: '4vw',
    background: white,
    boxShadow: '2px 2px 10px 0 rgba(200, 200, 200, 0.5)',
    [BASE_MQ]: {
      fontSize: '1.3em',
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
