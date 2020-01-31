/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import { listContainer } from '../styles/list';

export default function ListContainer({ style, children }) {
  return (
    <ul css={[listContainer, style]}>
      {children}
    </ul>
  );
}
