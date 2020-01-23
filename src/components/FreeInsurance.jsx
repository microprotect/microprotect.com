/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Text from './Text';
import FreeInsuranceCase from './FreeInsuranceCase';
import WhyFreeInsurance from './WhyFreeInsurance';

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
      float: 'left',
      fontSize: '5vw',
    },
    [mq(1800)]: {
      fontSize: '5em',
    },
  },
};

export default function FreeInsurance({ t }) {
  return (
    <main css={styles.container}>
      <h1 css={styles.title}>
        <Text value={t.free_insurance_title} />
      </h1>
      <FreeInsuranceCase t={t} />
      <WhyFreeInsurance t={t} />
    </main>
  );
}
