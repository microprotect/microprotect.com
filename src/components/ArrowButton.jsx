/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import { imageReplacement } from '../styles/utils';

import { BASE_MQ } from '../styles/constants-v5';

import {
  ArrowImage,
  ArrowPinkImage,
} from '../assets/v5';

const styles = {
  button: (pink) => ({
    ...imageReplacement(pink ? ArrowPinkImage : ArrowImage),
    position: 'absolute',
    top: '50%',
    right: 0,
    transform: 'translate3d(0, -50%, 0)',
    display: 'block',
    width: '4em',
    height: '4em',
    border: 0,
    [BASE_MQ]: {
      position: 'static',
      transform: 'unset',
      display: 'inline-block',
      width: 'auto',
      height: 'auto',
      padding: '.4em 1.4em',
      borderRadius: '1em',
      boxShadow: '2px 2px 10px 0 rgba(100, 100, 100, .4)',
      background: '#2C65ED',
      color: '#FFF',
      textIndent: 0,
    },
  }),
};

export default function ArrowButton({ label, style, pink }) {
  return (
    <button
      type="button"
      css={[styles.button(pink), style || {}]}
    >
      {label}
    </button>
  );
}
