/* @jsx jsx */

import React, { useState } from 'react';

import { jsx } from '@emotion/core';

import ListContainer from './ListContainer';
import ListItem from './ListItem';

import {
  BASE_MQ,
  red,
} from '../styles/constants-v5';

const styles = {
  items: {
    marginTop: '3em',
    [BASE_MQ]: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  },
  item: (more, index, limit) => ({
    display: (more || index < limit) ? 'block' : 'none',
    marginBottom: '4vw',
    [BASE_MQ]: {
      display: (more || index < limit * 2) ? 'block' : 'none',
      marginBottom: '1em',
      width: '50%',
      paddingRight: '.5em',
      '&:nth-of-type(even)': {
        paddingRight: 0,
        paddingLeft: '.5em',
      },
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

function MoreButton({ render, onClick }) {
  return (
    <button
      css={styles.moreButton}
      type="button"
      onClick={onClick}
    >
      {render()}
    </button>
  );
}

export default function GridList({
  limit = 9999, items, render, renderMore,
}) {
  const [more, setMore] = useState(!renderMore);

  return (
    <>
      <ListContainer style={styles.items}>
        {items.map((item, index) => (
          <ListItem
            key={item.id}
            style={styles.item(more, index, limit)}
          >
            {render(item)}
          </ListItem>
        ))}
      </ListContainer>
      {items.length > limit && !more && (
        <MoreButton
          render={() => renderMore()}
          onClick={() => setMore(true)}
        />
      )}
    </>
  );
}
