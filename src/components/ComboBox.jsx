/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import slugify from 'slugify';

import WeakText from './WeakText';
import FieldTitle from './FieldTitle';
import FieldBody from './FieldBody';

const styles = {
  select: {
    fontSize: '1em',
  },
};

export default function ComboBox({ name, label, options }) {
  const id = slugify(`input-${name}`, { lower: true });

  return (
    <div>
      <FieldTitle>
        <label htmlFor={id}>
          <WeakText value={label} />
        </label>
      </FieldTitle>
      <FieldBody>
        <select
          id={id}
          css={styles.select}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      </FieldBody>
    </div>
  );
}
