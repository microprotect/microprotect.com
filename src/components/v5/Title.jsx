/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import underlined from '../../styles/v5/underlined';

const styles = {
  title: {
    margin: '0 0 1em',
    fontsize: '1.8em',
    '& small': {
      display: 'block',
      marginBottom: '.1em',
      fontSize: '.7em',
      fontWeight: 'normal',
    },
    '& span': {
      display: 'inline-block',
    },
  },
};

export default function Title({ value, preValue }) {
  return (
    <h2 css={styles.title}>
      {preValue && (
        <small>
          {preValue}
        </small>
      )}
      <span css={underlined('#E3EAF5')}>
        {value}
      </span>
    </h2>
  );
}
