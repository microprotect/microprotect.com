/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Text from '../Text';

import products from '../../data/products-ko.json';
import WeakText from '../WeakText';

import { BASE_MQ } from '../../styles/constants-v4';

const styles = {
  container: {
    padding: '5vw 5% 20vw',
    background: '#FAFCFF',
    [BASE_MQ]: {
      padding: '1em 27% 2em',
      fontSize: '.8em',
    },
  },
  title: {
    fontSize: '1.2em',
    [BASE_MQ]: {
      fontSize: '.7em',
    },
  },
  text: {
    display: 'block',
    margin: '.3em 0',
    [BASE_MQ]: {
      fontSize: '.4em',
      margin: '.8em 0',
    },
  },
  note: {
    marginTop: '2em',
    color: '#ADB5C1',
    [BASE_MQ]: {
      fontSize: '.4em',
    },
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
