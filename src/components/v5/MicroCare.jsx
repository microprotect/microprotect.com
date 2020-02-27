/* @jsx jsx */

import React, { useState } from 'react';

import { jsx } from '@emotion/core';

import HomeTitle from './HomeTitle';
import MicroCareItem from './MicroCareItem';
import ListContainer from '../ListContainer';
import ListItem from '../ListItem';

import { BASE_MQ } from '../../styles/constants-v4';
import { mq } from '../../styles/utils';

const styles = {
  container: {
    padding: '7vw 5%',
    [BASE_MQ]: {
      padding: '1em 10%',
      fontSize: '.5em',
    },
    [mq(1800)]: {
      padding: '1em 15%',
    },
  },
  title: {
    [BASE_MQ]: {
      textAlign: 'center',
    },
    [mq(1800)]: {
      fontSize: '.8em',
    },
  },
  content: {
    position: 'relative',
    margin: '0 -5%',
    padding: '0 15%',
    width: '100vw',
    overflow: 'hidden',
    [BASE_MQ]: {
      display: 'none',
    },
  },
  items: {
    display: 'flex',
    width: '200%',
    transition: '.3s ease-in-out',
    [BASE_MQ]: {
      width: '100%',
    },
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
  contentDesktop: {
    display: 'none',
    [BASE_MQ]: {
      display: 'flex',
      position: 'relative',
    },
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
      <div css={styles.title}>
        <HomeTitle
          preValue={t.microcare_pre_title}
          value={t.microcare_title}
        />
      </div>
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
      <div css={styles.contentDesktop}>
        <ListContainer style={styles.items}>
          {[1, 2].map((index) => (
            <ListItem
              style={styles.item}
              key={index}
            >
              <MicroCareItem
                t={t}
                index={index}
                active
              />
            </ListItem>
          ))}
        </ListContainer>
      </div>
    </div>
  );
}
