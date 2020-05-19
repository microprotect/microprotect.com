import React, { useState } from 'react';

import styled from '@emotion/styled';

import ListContainer from './ListContainer';
import ListItem from './ListItem';

import {
  BASE_MQ,
  red,
} from '../styles/constants-v5';

const Items = styled(ListContainer)({
  marginTop: '3em',
  [BASE_MQ]: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

const Item = styled(ListItem)(({ index, limit, more }) => ({
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
}));

const MoreButton = styled.button({
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
});

export default function GridList({
  limit = 9999, items, render, renderMore,
}) {
  const [more, setMore] = useState(!renderMore);

  return (
    <>
      <Items>
        {items.map((item, index) => (
          <Item
            key={item.id}
            index={index}
            limit={limit}
            more={more}
          >
            {render(item)}
          </Item>
        ))}
      </Items>
      {items.length > limit && !more && (
        <MoreButton
          type="button"
          onClick={() => setMore(true)}
        >
          {renderMore()}
        </MoreButton>
      )}
    </>
  );
}
