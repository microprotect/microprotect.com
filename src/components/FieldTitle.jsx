/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

const styles = {
  container: {
    display: 'inline-block',
    width: '30%',
    lineHeight: '100%',
    '& small': {
      marginLeft: '.1em',
      fontSize: '.7em',
      color: '#ADB5C1',
    },
  },
};

export default function FieldTitle({ children }) {
  return (
    <div css={styles.container}>
      {children}
    </div>
  );
}
