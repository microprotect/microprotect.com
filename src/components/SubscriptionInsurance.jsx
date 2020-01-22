/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Text from './Text';

import { mq } from '../styles/utils';

const BASE_MQ = mq(640);

const styles = {
  container: {
    paddingTop: '5em',
  },
  title: {
    marginLeft: '5%',
    fontFamily: 'Helvetica',
    fontSize: '9vw',
    fontWeight: 'bold',
    lineHeight: '120%',
    textDecoration: 'none',
    [BASE_MQ]: {
      fontSize: '5vw',
    },
    [mq(1800)]: {
      fontSize: '5em',
    },
  },
};

export default function SubscriptionInsurance({ t }) {
  return (
    <main css={styles.container}>
      <h1 css={styles.title}>
        <Text value={'Microprotect\nprepare for\ncritical illness'} />
      </h1>
      <h2>
        {t.subscription_feature1}
      </h2>
      <h2>
        {t.subscription_feature2}
      </h2>
      <h2>
        {t.subscription_feature3}
      </h2>
      <h2>
        {t.subscription_feature4}
      </h2>
      <h2>
        {t.subscription_feature5}
      </h2>
    </main>
  );
}
