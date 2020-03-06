/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import {
  BASE_MQ,
  CONTENT_PADDING,
} from '../../styles/constants-v5';

const styles = {
  container: {
    margin: '15vw 0',
    padding: '0 5%',
    [BASE_MQ]: {
      margin: '5em auto',
      padding: `0 ${CONTENT_PADDING}`,
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
