/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import { mq } from '../styles/utils';

import features from '../data/features';

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
      flexWrap: 'wrap',
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
  watch: {
    margin: '4em 0 5em',
    textAlign: 'center',
    [mq(1024)]: {
      marginTop: '1em',
    },
  },
  watchLink: {
    display: 'block',
    padding: '.6em',
    border: '1px solid #000',
    borderRadius: '4px',
    fontSize: '1.2em',
    color: '#444',
    textDecoration: 'none',
    '&:hover': {
      borderColor: '#3ed7e8',
      color: '#fff',
      background: '#3ed7e8',
    },
    [mq(1024)]: {
      display: 'inline-block',
      padding: '.3em .9em',
    },
  },
};

export default function Product() {
  return (
    <section>
      <h2 css={styles.title}>
        보험을 가치 있게 같이 하세요
      </h2>
      <ul css={styles.features}>
        {features.map(({ title, description }) => (
          <li
            key={title}
            css={styles.feature}
          >
            <h3 css={styles.subtitle}>
              {title}
            </h3>
            {description
              .match(/([^.?]+[.?])/g)
              .map((text) => (
                <p key={text}>
                  {text}
                </p>
              ))}
          </li>
        ))}
      </ul>
      <div css={styles.watch}>
        <a
          css={styles.watchLink}
          href="https://www.youtube.com/watch?v=qG--TQhGi00"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch the video
        </a>
      </div>
      <div css={styles.feature}>
        <h3 css={styles.subtitle}>
          무료보험을 함께 만들어 갑시다
        </h3>
        <p>
          하루 4달러를 버는 저소득층의 사람들은
          위험에 노출되어 있습니다.
          저희 보험에 가입하시면
          무료보험을 제공할 수 있습니다.
        </p>
      </div>
    </section>
  );
}
