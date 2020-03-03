/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

const styles = {
  line: {
    margin: '2em 0',
    height: '1px',
    background: '#E2E8F2',
  },
};

export default function Line() {
  return (
    <div css={styles.line} />
  );
}
