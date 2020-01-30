/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Text from './Text';

export default function StrongText({ value }) {
  return (
    <>
      {(value || '').split('*')
        .map((text, index) => {
          const Tag = ['span', 'b'][index % 2];
          return (
            <Tag key={text}>
              <Text value={text} />
            </Tag>
          );
        })}
    </>
  );
}
