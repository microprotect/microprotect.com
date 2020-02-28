/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import { BASE_MQ } from '../../styles/constants-v4';

const styles = {
  container: {
    margin: '15vw 0',
    padding: '0 5%',
    [BASE_MQ]: {
      margin: '5em auto',
      padding: 0,
      maxWidth: '1200px',
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
