/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import TextField from './fields/TextField';
import DateField from './fields/DateField';
import ZipcodeField from './fields/ZipcodeField';
import RadioButton from './RadioButton';
import ComboBox from './fields/ComboBox';
import CheckBox from './fields/CheckBox';
import Note from './fields/Note';
import Line from './fields/Line';

const styles = {
  container: {
    margin: '.5em 0',
  },
};

function NullField() {
  return <></>;
}

function Title({ field, t }) {
  const { name } = field;

  return (
    <h3>
      {t[`form_title_${name}`]}
    </h3>
  );
}

export default function InputField({ field, t }) {
  const { type } = field;

  const Field = {
    title: Title,
    text: TextField,
    date: DateField,
    zipcode: ZipcodeField,
    radio: RadioButton,
    combobox: ComboBox,
    checkbox: CheckBox,
    note: Note,
    line: Line,
  }[type] || NullField;

  return (
    <div css={styles.container}>
      <Field field={field} t={t} />
    </div>
  );
}
