/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

export default function Text({ value }) {
  return (
    <>
      {(value || '').split('\n')
        .map((i, index) => (
          <span key={i}>
            {index > 0 && <br />}
            {i}
          </span>
        ))}
    </>
  );
}
