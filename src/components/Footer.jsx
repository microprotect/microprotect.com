/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import {
  BASE_MQ,
  CONTENT_PADDING,
} from '../styles/constants-v5';

const styles = {
  container: {
    clear: 'both',
    padding: '3em 5% 6em',
    background: '#E3E9F2',
    color: '#31343d',
    fontSize: '1rem',
    [BASE_MQ]: {
      padding: `3em ${CONTENT_PADDING} 6em`,
    },
  },
};

export default function Footer() {
  return (
    <footer css={styles.container}>
      <p>
        (주)마이크로프로텍트보험서비스
        |
        (04779) 서울시 성동구 뚝섬로 1나길 5, 6층 에스624호
      </p>
      <p>
        대표: 권상민
        |
        사업자등록번호: 710-81-02083
        |
        Email: freelion@microprotect.com
      </p>
      <p>
        대표번호: 02-6925-7074
      </p>
      <p>
        Copyright Microprotect Insurance Service. All rights reserved.
      </p>
    </footer>
  );
}
