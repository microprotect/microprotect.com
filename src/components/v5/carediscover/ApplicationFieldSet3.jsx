/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import InputField from '../../InputField';

import { fields3 as fields } from './form.json';

export default function ApplicationFieldSet3({ t }) {
  return (
    <>
      {fields.map((field) => (
        <InputField
          key={field.name}
          field={field}
          t={t}
        />
      ))}
      <div>
        <button type="submit">
          Send application
        </button>
      </div>
    </>
  );
}
