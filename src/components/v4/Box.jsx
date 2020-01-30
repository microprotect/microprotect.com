/* eslint-disable react/jsx-props-no-spreading */

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
    boxShadow: '2px 2px 6px 0 rgba(200, 200, 200, 0.5)',
    [BASE_MQ]: {
      fontSize: '1.3em',
    },
  },
};

export default function Box(props) {
  const { children } = props;

  return (
    <div {...props} css={styles.container}>
      {children}
    </div>
  );
}
