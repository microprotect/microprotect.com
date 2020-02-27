/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Text from '../Text';

import products from '../../data/products-ko.json';
import WeakText from '../WeakText';

const styles = {
  container: {
    padding: '5vw 5% 20vw',
    background: '#FAFCFF',
  },
  title: {
    fontSize: '1.2em',
  },
  text: {
    display: 'block',
    margin: '.3em 0',
  },
  note: {
    marginTop: '2em',
    color: '#ADB5C1',
  },
};

export default function InsuranceNotice({ t, product }) {
  return (
    <div css={styles.container}>
      <h2 css={styles.title}>
        보장하지 않는 손해
      </h2>
      {products[product].noticeItems.map((value) => (
        <div key={value} css={styles.text}>
          <Text value={value} />
        </div>
      ))}
      <div css={styles.note}>
        <WeakText value={t.insurance_notice_note} />
      </div>
    </div>
  );
}
