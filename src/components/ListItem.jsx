/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import { listItem } from '../styles/list';

export default function ListItem({ inline, style, children }) {
  return (
    <li
      css={[
        listItem,
        inline ? { display: 'inline-block' } : {},
        style,
      ]}
    >
      {children}
    </li>
  );
}
