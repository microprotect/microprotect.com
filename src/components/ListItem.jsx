/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import { listItem } from '../styles/list';

export default function ListItem({ style, children }) {
  return (
    <li css={[listItem, style]}>
      {children}
    </li>
  );
}
