/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Vision from './Vision';
import Insurance from './Insurance';
import BossVideo from './BossVideo';
import Product from './Product';
import Partners from './Partners';

import { mq } from '../styles/utils';

const styles = {
  container: {
    [mq(1024)]: {
      fontSize: '20px',
    },
    '& section': {
      margin: '4em auto',
      width: '90%',
      maxWidth: '1400px',
    },
  },
};

export default function MainV2({ t }) {
  return (
    <main css={styles.container}>
      <Vision />
      <Insurance t={t} />
      <BossVideo />
      <Product t={t} />
      <Partners />
    </main>
  );
}
