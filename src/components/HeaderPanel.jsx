/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

const styles = {
  container: {
    position: 'relative',
    height: '3em',
    background: 'linear-gradient(135deg, #7AC7F8 0%, #6594F8 100%)',
    color: '#FFF',
  },
};

export default function HeaderPanel() {
  return (
    <div css={styles.container} />
  );
}
