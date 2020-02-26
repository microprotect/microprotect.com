/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Text from './Text';

function key(text, index) {
  return `${text}-${index}`;
}

export default function WeakText({ value }) {
  return (
    <>
      {(value || '').split('_')
        .map((text, index) => {
          const Tag = ['span', 'small'][index % 2];
          return text && (
            <Tag key={key(text, index)}>
              <Text value={text} />
            </Tag>
          );
        })}
    </>
  );
}
