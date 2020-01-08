/* @jsx jsx */

import React, { useState } from 'react';

import { jsx } from '@emotion/core';

import { mq } from '../styles/utils';

import {
  SecureVideo,
  MoreVideo,
  PleopleVideo,
  EquallyVideo,
} from '../assets';

const layer = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
};

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    marginBottom: '2em',
  },
  content: {
    ...layer,
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    margin: '0 auto',
    maxWidth: '250px',
    lineHeight: '135%',
    letterSpacing: '.03em',
    fontFamily: 'Georgia',
    fontSize: '2em',
    fontWeight: 'normal',
    color: '#3ed7e8',
    textAlign: 'center',
    textTransform: 'capitalize',
    transform: 'scale(1, .9)',
    transition: '.3s',
    [mq(1024)]: {
      maxWidth: '700px',
      fontSize: '5em',
    },
  },
  highlighted: {
    color: '#FFF',
  },
  word: {
    cursor: 'pointer',
  },
  overlay: {
    ...layer,
    zIndex: 1,
    background: '#000',
    transition: '.5s',
  },
  video: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate3d(-50%, -50%, 0)',
    width: '100%',
    height: 'auto',
    '@media (max-aspect-ratio: 1800/1068)': {
      width: 'auto',
      height: '100%',
    },
  },
};

const WORDS = 'Secure more people equally'.split(' ');

const VIDEOS = {
  Secure: SecureVideo,
  more: MoreVideo,
  people: PleopleVideo,
  equally: EquallyVideo,
};

export default function Vision() {
  const [selectedWord, selectWord] = useState('');

  const handleMouseOver = (word) => selectWord(word);
  const handleMouseOut = () => selectWord('');

  return (
    <section css={styles.container}>
      <div css={styles.content}>
        <h1 css={[
          styles.title,
          selectedWord ? styles.highlighted : {},
        ]}
        >
          {WORDS.map((word) => (
            <span
              key={word}
              css={[
                styles.word,
                { opacity: !selectedWord || selectedWord === word ? 1 : 0.3 },
              ]}
              onMouseOver={() => handleMouseOver(word)}
              onMouseOut={handleMouseOut}
              onFocus={() => handleMouseOver(word)}
              onBlur={handleMouseOver}
            >
              {word}
              {' '}
            </span>
          ))}
        </h1>
      </div>
      <div css={[
        styles.overlay,
        { opacity: selectedWord ? 1 : 0 },
      ]}
      >
        {selectedWord && (
          <video css={styles.video} autoPlay loop muted>
            <source src={VIDEOS[selectedWord]} />
          </video>
        )}
      </div>
    </section>
  );
}
