/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

export default function StrongText({ value }) {
  return (
    <>
      {value.split('*')
        .map((text, index) => (
          index % 2 === 0 ? text : <b key={text}>{text}</b>
        ))}
    </>
  );
}
