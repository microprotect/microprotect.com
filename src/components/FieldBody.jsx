/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

const styles = {
  container: {
    display: 'inline-block',
    width: '70%',
    verticalAlign: 'top',
  },
};

export default function FieldBody({ children }) {
  return (
    <div css={styles.container}>
      {children}
    </div>
  );
}
