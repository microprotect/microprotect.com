/* @jsx jsx */

import React, { useState, useEffect } from 'react';

import { jsx } from '@emotion/core';

import { mq } from '../styles/utils';

const BASE_MQ = mq(640);

const styles = {
  container: {
    marginTop: '.2em',
    minHeight: '3em',
    [BASE_MQ]: {
      minHeight: 'auto',
    },
  },
};

const TEXTS = [
  'Critical Illness',
  'Private Accident Insurance',
  'Occupational Disability Insurance',
];

export default function ProductRotation() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      setIndex(index + 1);
    }, 1500);

    return function cleanup() {
      clearTimeout(id);
    };
  }, [index]);

  const text = TEXTS[index % TEXTS.length];

  return (
    <div css={styles.container}>
      <span>{text}</span>
    </div>
  );
}
