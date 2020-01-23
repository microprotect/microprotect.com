/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Text from './Text';

import { mq } from '../styles/utils';

const BASE_MQ = mq(640);

const styles = {
  container: {
    padding: '5em 0',
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
  subtitle: {
    margin: '1em 5% .5em',
    fontFamily: 'Helvetica',
    fontSize: '2em',
  },
  paragraph: {
    margin: '.5em 5%',
    fontFamily: 'Helvetica',
    fontSize: '1.2em',
  },
  figure: {
    marginTop: '.8em',
    maxWidth: '100%',
  },
};

export default function SubscriptionInsurance() {
  return (
    <main css={styles.container}>
      <h1 css={styles.title}>
        <Text value={'Microprotect\nprepare for\ncritical illness'} />
      </h1>
      <h2 css={styles.subtitle}>
        Why should insurance be kept long?
      </h2>
      <p css={styles.paragraph}>
        Can&#39;t we just use what we need and pay the price monthly,
        as we have experienced with Netflix?
      </p>
      <p css={styles.paragraph}>
        <img
          css={styles.figure}
          src="/assets/images/subscription/netflix.png"
          alt=""
          width="400"
        />
      </p>
      <h2 css={styles.subtitle}>
        Why monthly subscription insurance is needed?
      </h2>
      <p css={styles.paragraph}>
        While Koreans feel that insurance is necessary,
        they can&#39;t keep it long because of high cost.
      </p>
      <p css={styles.paragraph}>
        Only 30% of insureds
        can maintain their insurance product
        for more than 10 years
      </p>
      <p css={styles.paragraph}>
        In Korea, insurance is generally covered up to 100 years
        of age and paid for 20 years.
      </p>
      <p css={styles.paragraph}>
        On the other hand,
        we suggest paying only as much premiums as you need each month.
      </p>
      <p css={styles.paragraph}>
        If you compare Korea&#39;s representative insurance cases.
      </p>
      <p css={styles.paragraph}>
        <img
          css={styles.figure}
          src="/assets/images/subscription/price-table.png"
          alt=""
          width="600"
        />
      </p>
      <h2 css={styles.subtitle}>
        Every month No-Claim bonus!
      </h2>
      <p css={styles.paragraph}>
        5% of your monthly premium at the end of each month.
      </p>
      <p css={styles.paragraph}>
        We use this process to communicate with our customers
        monthly and get better at them.
      </p>
      <h2 css={styles.subtitle}>
        Free insurance for low-income people
      </h2>
      <p css={styles.paragraph}>
        The monthly premium paid by the customer
        already included 10% of the premium for free insurance.
      </p>
      <p css={styles.paragraph}>
        We will show you who is eligible for free coverage
        from your monthly subscription.
      </p>
      <p css={styles.paragraph}>
        <img
          css={styles.figure}
          src="/assets/images/subscription/world.png"
          alt=""
          width="600"
        />
      </p>
      <h2 css={styles.subtitle}>
        There are special riders for Koreans.
      </h2>
      <p css={styles.paragraph}>
        Airfare and hotel fees are provided to help you
        focus on treatment in Korea.
      </p>
      <p css={styles.paragraph}>
        If you select a rider at the time of enrollment,
        you will receive the equivalent of 4,000 EUR.
      </p>
    </main>
  );
}
