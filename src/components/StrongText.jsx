/* @jsx jsx */

import React, { createElement } from 'react';

import { jsx } from '@emotion/core';

import Text from './Text';

export default function StrongText({ value }) {
  return (
    <>
      {(value || '').split('*')
        .map((text, index) => createElement(
          index % 2 === 0 ? 'span' : 'b',
          { key: text },
          <Text value={text} />,
        ))}
    </>
  );
}
