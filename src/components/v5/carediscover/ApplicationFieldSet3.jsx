/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import InputField from '../../InputField';
import SubmitButton from './SubmitButton';

import { fields3 as fields } from './form.json';

export default function ApplicationFieldSet3({ t }) {
  return (
    <>
      {fields.map((field) => (
        <InputField
          key={`${field.type}-${field.name}`}
          field={field}
          t={t}
        />
      ))}
      <SubmitButton t={t} />
    </>
  );
}
