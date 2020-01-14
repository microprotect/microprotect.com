/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

export default function Text({ value }) {
  return (
    <>
      {value.split('\n')
        .map((i) => (
          <span key={i}>
            {i}
            <br />
          </span>
        ))}
    </>
  );
}
