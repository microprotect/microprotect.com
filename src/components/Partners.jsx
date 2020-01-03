/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import { mq } from '../styles/utils';

import partners from '../data/partners';

const styles = {
  container: {
    marginTop: '7em',
    marginBottom: '7em',
    textAlign: 'center',
  },
  title: {
    display: 'inline-block',
    margin: '0 0 .8em',
    padding: '.6em 1.4em',
    border: '2px solid #000',
    borderRadius: '100px',
    [mq(1100)]: {
      fontSize: '1em',
    },
  },
  items: {
    margin: '0 auto',
    padding: 0,
    listStyle: 'none',
    [mq(1100)]: {
      width: '90%',
    },
  },
  item: {
    margin: '1em 0',
    verticalAlign: 'middle',
    [mq(1100)]: {
      margin: '1em 20px 0',
      display: 'inline-block',
    },
  },
  banner: {
    height: '8vw',
    [mq(1100)]: {
      height: '4vw',
      maxHeight: '60px',
    },
  },
};

export default function Partners() {
  return (
    <section css={styles.container}>
      <h2 css={styles.title}>
        Partners
      </h2>
      <ul css={styles.items}>
        {partners.map((partner) => (
          <li
            key={partner.title}
            css={styles.item}
          >
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`assets/images/partners/${partner.image}`}
                alt={partner.title}
                css={styles.banner}
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
