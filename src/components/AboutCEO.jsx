/* @jsx jsx */

import React from 'react';

import { jsx, css } from '@emotion/core';

import StrongText from './StrongText';

import { listContainer, listItem } from '../styles/list';

import { AboutCeoImage } from '../assets';

import { ceo } from '../data/members';

const styles = {
  container: {
    margin: '4em 0',
    '& b': {
      fontFamily: 'Helvetica',
      fontWeight: 'bold',
    },
  },
  title: {
    margin: 0,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: '1.8em',
    textTransform: 'uppercase',
  },
  role: {
    display: 'block',
    marginTop: '.3em',
    fontSize: '.8em',
  },
  picture: {
    display: 'block',
    margin: '1em 0',
    width: '100%',
    maxWidth: '320px',
  },
  subtitle: {
    margin: 0,
    fontFamily: 'Helvetica',
    fontWeight: 'normal',
    fontSize: '1.3em',
  },
  description: {
    ...listContainer,
    marginTop: '1em',
  },
  descriptionItem: {
    ...listItem,
    margin: '.5em 0',
    fontWeight: 'lighter',
  },
};

export default function AboutCEO() {
  const { name, role, description } = ceo;

  return (
    <div css={styles.container}>
      <h2 css={styles.title}>
        {name}
        <span css={styles.role}>
          {role}
        </span>
      </h2>
      <img
        css={styles.picture}
        src={AboutCeoImage}
        alt=""
      />
      <h3 css={styles.subtitle}>
        CEO’s successful track record in online insurance
      </h3>
      <ul css={styles.description}>
        {description.trim()
          .split('\n')
          .map((line) => (
            <li
              key={line}
              css={[
                styles.descriptionItem,
                css`&:before { content: "- " }`,
              ]}
            >
              <StrongText value={line} />
            </li>
          ))}
      </ul>
    </div>
  );
}
