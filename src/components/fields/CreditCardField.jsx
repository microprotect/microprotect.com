/* @jsx jsx */

import React, { useRef, Fragment } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { jsx } from '@emotion/core';

import _ from 'lodash';
import slugify from 'slugify';

import { setApplicationField } from '../../appSlice';

import FieldTitle from '../FieldTitle';
import WeakText from '../WeakText';
import FieldBody from '../FieldBody';

const TYPES = ['number', 'password', 'password', 'number'];

const styles = {
  input: {
    padding: '.5em 0',
    width: '3em',
    border: '1px solid #E7ECF5',
    textAlign: 'center',
  },
};

export default function CreditCardField({
  field: { name, required = false, readOnly = false },
  t,
}) {
  const id = slugify(`input-${name}`, { lower: true });

  const inputs = _.range(4).map(() => useRef(null));

  const dispatch = useDispatch();

  const { value } = useSelector((state) => ({
    value: state.applicationForm[name],
  }));

  const values = _.chunk(value, 4).map((i) => i.join('').trim());

  const setValue = (index, number) => {
    dispatch(setApplicationField({
      key: name,
      value: values
        .map((x, i) => _.padEnd(i === index ? number : x, 4))
        .join(''),
    }));
  };

  const moveFocus = (index) => {
    inputs[index].current.blur();
    if (index + 1 >= 4) {
      return;
    }
    if (values[index + 1]) {
      return;
    }
    inputs[index + 1].current.focus();
  };

  const handleChange = (event, index) => {
    const targetValue = event.target.value;
    if (targetValue.length > 4) {
      return;
    }
    setValue(index, targetValue);
    if (targetValue.length === 4) {
      setTimeout(() => moveFocus(index), 0);
    }
  };

  return (
    <div>
      <FieldTitle>
        <label htmlFor={`${id}-0`}>
          <WeakText value={t[`form_${name}`]} />
        </label>
      </FieldTitle>
      <FieldBody>
        {[0, 1, 2, 3].map((index) => (
          <Fragment key={index}>
            {index > 0 && ' - '}
            <input
              ref={inputs[index]}
              css={styles.input}
              id={`${id}-${index}`}
              type={TYPES[index]}
              required={required}
              readOnly={readOnly}
              value={values[index]}
              onChange={(event) => handleChange(event, index)}
              onFocus={() => setValue(index, '')}
            />
          </Fragment>
        ))}
      </FieldBody>
    </div>
  );
}
