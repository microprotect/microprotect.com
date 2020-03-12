import React from 'react';

import slugify from 'slugify';

import Input from './Input';
import FieldTitle from '../FieldTitle';
import FieldBody from '../FieldBody';
import WeakText from '../WeakText';

export default function BasicField({
  field: { name, required = false, readOnly = false },
  style, type, additional = null, t,
}) {
  const id = slugify(`input-${name}`, { lower: true });

  return (
    <div>
      <FieldTitle>
        <label htmlFor={id}>
          <WeakText value={t[`form_${name}`]} />
        </label>
      </FieldTitle>
      <FieldBody>
        <Input
          id={id}
          style={style}
          type={type}
          name={name}
          required={required}
          readOnly={readOnly}
        />
        {additional && additional()}
      </FieldBody>
    </div>
  );
}
