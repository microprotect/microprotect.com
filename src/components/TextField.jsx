import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import slugify from 'slugify';

import { setApplicationField } from '../appSlice';

import FieldTitle from './FieldTitle';
import FieldBody from './FieldBody';
import WeakText from './WeakText';

export default function TextField({
  name, label, type, required = false, readOnly = false, additional = null,
}) {
  const dispatch = useDispatch();

  const { value } = useSelector((state) => ({
    value: state.applicationForm[name],
  }));

  const handleChange = (event) => {
    dispatch(setApplicationField({
      key: name,
      value: event.target.value,
    }));
  };

  const id = slugify(`input-${name}`, { lower: true });

  return (
    <div>
      <FieldTitle>
        <label htmlFor={id}>
          <WeakText value={label} />
        </label>
      </FieldTitle>
      <FieldBody>
        <input
          type={type}
          id={id}
          required={required}
          readOnly={readOnly}
          value={value}
          onChange={handleChange}
        />
        {additional && additional()}
      </FieldBody>
    </div>
  );
}
