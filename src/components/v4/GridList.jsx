/* @jsx jsx */

import React, { useState } from 'react';

import { jsx } from '@emotion/core';

import { listContainer, listItem } from '../../styles/list';
import {
  BASE_MQ,
  red,
} from '../../styles/constants-v4';

const styles = {
  items: {
    ...listContainer,
    [BASE_MQ]: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  },
  item: {
    ...listItem,
    marginBottom: '4vw',
    [BASE_MQ]: {
      marginBottom: '2em',
      width: '50%',
      paddingRight: '1em',
      '&:nth-of-type(even)': {
        paddingRight: 0,
        paddingLeft: '1em',
      },
    },
  },
  more: (more, index, limit) => ({
    display: (more || index < limit) ? 'block' : 'none',
    [BASE_MQ]: {
      display: (more || index < limit * 2) ? 'block' : 'none',
    },
  }),
  moreButton: {
    width: '100%',
    padding: '2vw',
    border: 0,
    background: 'transparent',
    color: red,
    fontSize: '5vw',
    fontWeight: 'bold',
    textAlign: 'center',
    textDecoration: 'underline',
    [BASE_MQ]: {
      padding: '.4em',
      fontSize: '1.6em',
    },
  },
};

export default function GridList({
  limit = 1, items, render, renderMore,
}) {
  const [more, setMore] = useState(!renderMore);

  return (
    <>
      <ul css={styles.items}>
        {items.map((item, index) => (
          <li
            key={item.id}
            css={[styles.item, styles.more(more, index, limit)]}
          >
            {render(item)}
          </li>
        ))}
      </ul>
      {!more && (
        <button
          css={styles.moreButton}
          type="button"
          onClick={() => setMore(true)}
        >
          {!more && renderMore()}
        </button>
      )}
    </>
  );
}
