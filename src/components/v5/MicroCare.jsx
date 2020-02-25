/* @jsx jsx */

import React, { useState } from 'react';

import { jsx } from '@emotion/core';

import Title from './Title';
import MicroCareItem from './MicroCareItem';
import ListContainer from '../ListContainer';
import ListItem from '../ListItem';

const styles = {
  container: {
    padding: '7vw 5%',
  },
  content: {
    position: 'relative',
    margin: '0 -5%',
    padding: '0 15%',
    width: '100vw',
    overflow: 'hidden',
  },
  items: {
    display: 'flex',
    width: '200%',
    transition: '.3s ease-in-out',
  },
  item: {
    width: '100%',
  },
  paginator: {
    textAlign: 'center',
  },
  paginatorButton: {
    display: 'inline-block',
    margin: '.5em',
    padding: 0,
    width: '1em',
    height: '1em',
    border: 0,
    borderRadius: '100%',
    background: '#D3DEEF',
    textIndent: '-1000px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: '.3s ease-in-out',
  },
  active: {
    background: '#212E3E',
  },
};

export default function MicroCare({ t }) {
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [startX, setStartX] = useState(0);

  const handleTouchStart = (event) => {
    setStartX(event.targetTouches[0].pageX);
  };
  const handleTouchMove = (event) => {
    setOffset(event.targetTouches[0].pageX - startX);
  };
  const handleTouchEnd = () => {
    setOffset(0);
    if (offset < -30) {
      setPage(2);
    }
    if (offset > 30) {
      setPage(1);
    }
  };

  return (
    <div css={styles.container}>
      <Title
        preValue={t.microcare_pre_title}
        value={t.microcare_title}
      />
      <div
        css={styles.content}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <ListContainer
          style={[
            styles.items,
            { marginLeft: `calc(-${(page - 1) * 100}% + ${offset}px)` },
            offset ? { transition: '0s' } : {},
          ]}
        >
          {[1, 2].map((index) => (
            <ListItem
              style={styles.item}
              key={index}
            >
              <MicroCareItem
                t={t}
                index={index}
                active={index === page}
              />
            </ListItem>
          ))}
        </ListContainer>
        <div css={styles.paginator}>
          {[1, 2].map((index) => (
            <button
              css={[
                styles.paginatorButton,
                index === page ? styles.active : {},
              ]}
              key={index}
              type="button"
              onClick={() => setPage(index)}
            >
              {index}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
