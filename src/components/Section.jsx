/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import {
  BASE_MQ,
  CONTENT_PADDING,
} from '../styles/constants-v5';

const styles = {
  container: {
    padding: '10vw 5%',
    [BASE_MQ]: {
      margin: '0 auto',
      padding: `3em ${CONTENT_PADDING}`,
    },
  },
};

export default function Section({ style, children }) {
  return (
    <section css={[styles.container, style]}>
      {children}
    </section>
  );
}
