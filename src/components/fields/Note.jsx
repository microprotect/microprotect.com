/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import StrongText from '../StrongText';

const styles = {
  note: {
    paddingLeft: '30%',
    fontSize: '.7em',
    color: '#ADB5C1',
    '& b': {
      fontWeight: 'normal',
      textDecoration: 'underline',
    },
  },
  noteForCheckbox: {
    paddingLeft: '3em',
  },
};

export default function Note({ field, t }) {
  const { name } = field;

  return (
    <div css={[
      styles.note,
      field.checkbox ? styles.noteForCheckbox : {},
    ]}
    >
      <StrongText value={t[`form_note_${name}`]} />
    </div>
  );
}
