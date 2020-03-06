/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import slugify from 'slugify';

import WeakText from './WeakText';

import {
  CheckOnImage,
  CheckOffImage,
} from '../assets';

const styles = {
  input: {
    display: 'none',
  },
  label: {
    display: 'inline-block',
    padding: '.2em .5em',
    paddingLeft: '2em',
    background: `url(${CheckOffImage}) 0 50% no-repeat`,
    backgroundSize: '1.4em',
    'input:checked + &': {
      backgroundImage: `url(${CheckOnImage})`,
    },
  },
};

export default function CheckBox({ name, label, value }) {
  const id = slugify(`input-${name}`, { lower: true });

  return (
    <div>
      <input
        css={styles.input}
        id={id}
        type="checkbox"
        value={value}
      />
      <label
        css={styles.label}
        htmlFor={id}
      >
        <WeakText value={label} />
      </label>
    </div>
  );
}
