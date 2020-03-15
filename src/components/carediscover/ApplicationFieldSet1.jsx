/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import InputField from '../InputField';
import NextButton from './NextButton';

import { fields1 as fields } from './form.json';

export default function ApplicationFieldSet1({ t, onNextButtonClick }) {
  return (
    <>
      {fields.map((field) => (
        <InputField
          key={`${field.type}-${field.name}`}
          field={field}
          t={t}
        />
      ))}
      <NextButton t={t} onClick={onNextButtonClick} />
    </>
  );
}
