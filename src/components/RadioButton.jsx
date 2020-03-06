/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import slugify from 'slugify';

import FieldTitle from './FieldTitle';
import FieldBody from './FieldBody';
import WeakText from './WeakText';
import ListContainer from './ListContainer';
import ListItem from './ListItem';

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

function Item({ name, option: { label, value } }) {
  const id = slugify(`${name}-${value}`, { lower: true });

  return (
    <>
      <input
        css={styles.input}
        type="radio"
        name={name}
        value={value}
        id={id}
      />
      <label
        css={styles.label}
        htmlFor={id}
      >
        {label}
      </label>
    </>
  );
}

export default function RadioButton({ name, label, options }) {
  return (
    <div>
      <FieldTitle>
        <WeakText value={label} />
      </FieldTitle>
      <FieldBody>
        <ListContainer>
          {options.map((option) => (
            <ListItem
              key={option.value}
              inline
            >
              <Item name={name} option={option} />
            </ListItem>
          ))}
        </ListContainer>
      </FieldBody>
    </div>
  );
}
