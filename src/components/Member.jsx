/* @jsx jsx */

import React from 'react';

import { jsx, css } from '@emotion/core';

import { listContainer, listItem } from '../styles/list';

const styles = {
  container: {
    fontFamily: 'Helvetica',
  },
  name: {
    display: 'inline',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: '1.2em',
    textTransform: 'uppercase',
  },
  role: {
    display: 'inline',
    marginLeft: '.4em',
    fontFamily: 'Helvetica',
    fontSize: '1.2em',
  },
  description: {
    ...listContainer,
  },
  descriptionItem: {
    ...listItem,
    margin: '.4em 0',
    fontWeight: 'lighter',
  },
};

export default function Member({ member: { name, role, description } }) {
  return (
    <div css={styles.container}>
      <div css={styles.name}>
        {name}
      </div>
      <div css={styles.role}>
        {role}
      </div>
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
              {line}
            </li>
          ))}
      </ul>
    </div>
  );
}
