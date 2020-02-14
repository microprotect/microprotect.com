/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import slugify from 'slugify';

import ListContainer from './ListContainer';
import ListItem from './ListItem';

const styles = {
  input: {
    display: 'none',
  },
  label: {
    display: 'inline-block',
    padding: '.2em .5em',
    background: '#EEE',
    'input:checked + &': {
      background: '#CCC',
    },
  },
};

function Item({ name, option }) {
  const id = slugify(`${name}-${option}`, { lower: true });

  return (
    <>
      <input
        css={styles.input}
        type="radio"
        name={name}
        id={id}
      />
      <label
        css={styles.label}
        htmlFor={id}
      >
        {option}
      </label>
    </>
  );
}

export default function RadioButton({ name, label, options }) {
  return (
    <div>
      <div>
        {label}
      </div>
      <ListContainer>
        {options.map((option) => (
          <ListItem
            key={option}
            inline
          >
            <Item name={name} option={option} />
          </ListItem>
        ))}
      </ListContainer>
    </div>
  );
}
