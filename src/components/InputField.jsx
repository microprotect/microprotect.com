/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Title from './fields/Title';
import TextField from './fields/TextField';
import PhoneField from './fields/PhoneField';
import EmailField from './fields/EmailField';
import DateField from './fields/DateField';
import ZipcodeField from './fields/ZipcodeField';
import RadioButton from './RadioButton';
import ComboBox from './fields/ComboBox';
import CheckBox from './fields/CheckBox';
import Note from './fields/Note';
import Line from './fields/Line';
import CreditCardField from './fields/CreditCardField';

const styles = {
  container: {
    margin: '.8em 0',
  },
};

function NullField({ field }) {
  const { type, name } = field;

  return (
    <div>
      [[[
      {' '}
      {type}
      {' '}
      |
      {' '}
      {name}
      {' '}
      ]]]
    </div>
  );
}

export default function InputField({ field, t }) {
  const { type } = field;

  const Field = {
    title: Title,
    text: TextField,
    phone: PhoneField,
    email: EmailField,
    date: DateField,
    zipcode: ZipcodeField,
    creditcard: CreditCardField,
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
