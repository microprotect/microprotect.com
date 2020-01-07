/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import { mq } from '../styles/utils';

const styles = {
  title: {
    margin: '0 0 2em',
    fontSize: '1.5em',
    [mq(1024)]: {
      marginBottom: '3em',
      fontSize: '2em',
      textAlign: 'center',
    },
  },
  features: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    [mq(1024)]: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
  feature: {
    marginBottom: '2em',
    lineHeight: '145%',
    color: '#666',
    [mq(1024)]: {
      width: '31%',
    },
  },
  subtitle: {
    margin: '0 0 .8em',
    fontSize: '1.2em',
    color: '#000',
  },
};

export default function Product() {
  return (
    <section>
      <h2 css={styles.title}>
        보험을 가치 있게 같이 하세요
      </h2>
      <ul css={styles.features}>
        <li css={styles.feature}>
          <h3 css={styles.subtitle}>
            가입과 해지가 자유롭습니다
          </h3>
          <p>
            이제 월단위로 가입하세요.
          </p>
          <p>
            한 달 사용료를 내는 구조로,
            보험료와 유지부담이 적습니다.
          </p>
        </li>
        <li css={styles.feature}>
          <h3 css={styles.subtitle}>
            사고가 없으면 돌려받으세요
          </h3>
          <p>
            병원 한 번 가지 않았는데 매월 나가는 보험료,
            아깝다고 생각하지 않으셨나요?
            사고가 나지 않은 가입자에게
            매달 일정 수준의 포인트를 드립니다.
          </p>
        </li>
        <li css={styles.feature}>
          <h3 css={styles.subtitle}>
            무료보험을 함께 만들어 갑시다
          </h3>
          <p>
            하루 4달러를 버는 저소득층의 사람들은
            위험에 노출되어 있습니다.
            저희 보험에 가입하시면
            무료보험을 제공할 수 있습니다.
          </p>
        </li>
      </ul>
    </section>
  );
}
