/* @jsx jsx */

import React, { useState, useEffect } from 'react';

import { jsx } from '@emotion/core';

import { mq } from '../styles/utils';

const BASE_MQ = mq(640);

const styles = {
  container: {
    marginTop: '.2em',
    height: '3em',
    [BASE_MQ]: {
      height: 'auto',
    },
  },
};

const PRODUCTS = [
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
  });

  return (
    <div css={styles.container}>
      {PRODUCTS[index % PRODUCTS.length]}
    </div>
  );
}
