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

function Item({ name, option, t }) {
  const id = slugify(`${name}-${option}`, { lower: true });

  return (
    <>
      <input
        css={styles.input}
        type="radio"
        name={name}
        value={option}
        id={id}
      />
      <label
        css={styles.label}
        htmlFor={id}
      >
        {t[`form_${name}_${option}`]}
      </label>
    </>
  );
}

export default function RadioButton({ field, t }) {
  const { name, options } = field;

  return (
    <div>
      <FieldTitle>
        <WeakText value={t[`form_${name}`]} />
      </FieldTitle>
      <FieldBody>
        <ListContainer>
          {options.map((option) => (
            <ListItem
              key={option}
              inline
            >
              <Item name={name} option={option} t={t} />
            </ListItem>
          ))}
        </ListContainer>
      </FieldBody>
    </div>
  );
}
