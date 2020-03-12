/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import slugify from 'slugify';

import WeakText from '../WeakText';
import FieldTitle from '../FieldTitle';
import FieldBody from '../FieldBody';

const styles = {
  select: {
    padding: '.5em 1em',
    width: '100%',
    height: '2.5em',
    border: '1px solid #E7ECF5',
    background: '#FFF',
    fontSize: '1em',
  },
};

export default function ComboBox({ field, t }) {
  const { name, prefix, options } = field;

  const id = slugify(`input-${name}`, { lower: true });

  return (
    <div>
      <FieldTitle>
        <label htmlFor={id}>
          <WeakText value={t[`form_${name}`]} />
        </label>
      </FieldTitle>
      <FieldBody>
        <select
          id={id}
          css={styles.select}
        >
          {options.map((option) => (
            <option
              key={option}
              value={option}
            >
              {prefix
                ? t[`${prefix}_${option}`]
                : t[`form_${name}_${option}`]}
            </option>
          ))}
        </select>
      </FieldBody>
    </div>
  );
}
