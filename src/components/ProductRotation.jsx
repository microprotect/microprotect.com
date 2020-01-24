/* @jsx jsx */

import React, { useState, useEffect } from 'react';

import { jsx } from '@emotion/core';

import { mq } from '../styles/utils';
import clearAfter from '../styles/clearAfter';

const BASE_MQ = mq(640);

const styles = {
  container: {
    marginTop: '.2em',
    minHeight: '3em',
    [BASE_MQ]: {
      minHeight: 'auto',
    },
  },
  text: {
    float: 'left',
    height: 0,
    visibility: 'hidden',
  },
  active: {
    height: 'auto',
    visibility: 'visible',
    animation: '.3s ease-out slidein',
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
      setIndex((index + 1) % TEXTS.length);
    }, 1500);

    return function cleanup() {
      clearTimeout(id);
    };
  }, [index]);

  return (
    <div css={[styles.container, clearAfter]}>
      {TEXTS.map((text, i) => (
        <div
          key={text}
          css={[
            styles.text,
            i === index ? styles.active : {},
          ]}
        >
          {text}
        </div>
      ))}
    </div>
  );
}
