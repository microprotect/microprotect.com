/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

const styles = {
  small: {
    fontSize: '.8em',
  },
};

export default function SmallText({ value }) {
  return (
    <small css={styles.small}>
      {value}
    </small>
  );
}
