/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import { imageReplacement } from '../../styles/utils';

import { ArrowImage } from '../../assets/v5';

const styles = {
  button: {
    ...imageReplacement(ArrowImage),
    position: 'absolute',
    top: '50%',
    right: 0,
    transform: 'translate3d(0, -50%, 0)',
    display: 'block',
    width: '4em',
    height: '4em',
    border: 0,
  },
};

export default function ArrowButton({ style }) {
  return (
    <button
      type="button"
      css={[styles.button, style || {}]}
    >
      See more
    </button>
  );
}
