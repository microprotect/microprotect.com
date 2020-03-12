/* @jsx jsx */

import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { jsx } from '@emotion/core';

import { setApplicationField } from '../../appSlice';

const styles = {
  input: {
    padding: '.5em 1em',
    width: '100%',
    border: '1px solid #E7ECF5',
    background: '#FFF',
  },
};

export default function Input({
  id, style, type, name, required, readOnly,
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

  return (
    <input
      css={[styles.input, style]}
      type={type}
      id={id}
      required={required}
      readOnly={readOnly}
      value={value}
      onChange={handleChange}
    />
  );
}
