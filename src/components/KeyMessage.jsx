/* @jsx jsx */

import React, { useState } from 'react';

import { jsx } from '@emotion/core';

import Link from './Link';
import BoxedText from './BoxedText';

import { mq } from '../styles/utils';

const styles = {
  container: {
    display: 'block',
    margin: '3em 5%',
    paddingLeft: '.2em',
    fontFamily: 'Helvetica',
    fontSize: '9vw',
    fontWeight: 'bold',
    lineHeight: '120%',
    textDecoration: 'none',
    [mq(640)]: {
      float: 'left',
      width: '40%',
      paddingLeft: 0,
      fontSize: '5vw',
    },
    [mq(1800)]: {
      fontSize: '5em',
    },
  },
  quote: {
    display: 'block',
    marginLeft: '-.2em',
    marginBottom: '-.3em',
    fontSize: '1.2em',
    color: '#46ebd9',
    [mq(640)]: {
      marginLeft: 0,
    },
  },
  strong: {
    fontWeight: 'bold',
  },
  more: {
    fontSize: '.5em',
    color: '#46ebd9',
    textTransform: 'uppercase',
    [mq(640)]: {
      fontSize: '.4em',
    },
  },
  active: {
    textDecoration: 'underline',
  },
};

export default function KeyMessage({ text, target }) {
  const [active, setActive] = useState(false);

  return (
    <Link
      css={styles.container}
      to={target}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <span css={styles.quote}>
        “
      </span>
      {(text || '').split('\n')
        .map((line) => (
          <div key={line}>
            {line.split('*')
              .map((part, index) => (
                index % 2 === 0 ? part : (
                  <BoxedText key={part} value={part} />
                )
              ))}
          </div>
        ))}
      <span css={[
        styles.more,
        active ? styles.active : {},
      ]}
      >
        + Learn more
      </span>
    </Link>
  );
}
