/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import TextField from './TextField';
import RadioButton from './RadioButton';
import ComboBox from './ComboBox';
import CheckBox from './CheckBox';
import StrongText from './StrongText';

const styles = {
  container: {
    margin: '.5em 0',
  },
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

function ZipcodeButton({ label }) {
  return (
    <button
      type="button"
    >
      {label}
    </button>
  );
}

export default function InputField({ field, t }) {
  const { type, name, required } = field;

  const Field = () => ({
    title: (
      <h3>
        {t[`form_title_${name}`]}
      </h3>
    ),
    text: (
      <TextField
        name={name}
        label={t[`form_${name}`]}
        type="text"
        required={required}
      />
    ),
    number: (
      <TextField
        name={name}
        label={t[`form_${name}`]}
        type="number"
        required={required}
      />
    ),
    date: (
      <TextField
        name={name}
        label={t[`form_${name}`]}
        type="date"
        required={required}
      />
    ),
    zipcode: (
      <TextField
        name={name}
        label={t[`form_${name}`]}
        type="number"
        required={required}
        readOnly
        additional={() => (
          <ZipcodeButton label={t.form_search_zipcode} />
        )}
      />
    ),
    radio: (
      <RadioButton
        name={name}
        label={t[`form_${name}`]}
        options={(field.options || []).map((option) => ({
          label: t[`form_${name}_${option}`],
          value: option,
        }))}
        required={required}
      />
    ),
    combobox: (
      <ComboBox
        name={name}
        label={t[`form_${name}`]}
        options={(field.options || []).map((option) => ({
          label: t[`country_${option}`],
          value: option,
        }))}
        required={required}
      />
    ),
    checkbox: (
      <CheckBox
        name={name}
        label={t[`form_${name}`]}
        value={field.value}
        required={required}
      />
    ),
    note: (
      <div css={[
        styles.note,
        field.checkbox ? styles.noteForCheckbox : {},
      ]}
      >
        <StrongText value={t[`form_note_${name}`]} />
      </div>
    ),
    line: (
      <hr />
    ),
  }[type]);

  return (
    <div css={styles.container}>
      <Field />
    </div>
  );
}
