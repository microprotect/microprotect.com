/* @jsx jsx */

import React, { useState } from 'react';

import { jsx } from '@emotion/core';

import { mq } from '../styles/utils';

import {
  SecureVideoImage,
  MoreVideoImage,
  PeopleVideoImage,
  EquallyVideoImage,
  SecureVideo,
  MoreVideo,
  PeopleVideo,
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
    maxWidth: '300px',
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
      maxWidth: '800px',
      fontSize: '5em',
    },
  },
  highlighted: {
    color: '#FFF',
  },
  word: {
    display: 'inline-block',
    margin: '0 .18em',
    cursor: 'pointer',
    animation: '1.2s ease-out slideup',
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

const IMAGES = {
  Secure: SecureVideoImage,
  more: MoreVideoImage,
  people: PeopleVideoImage,
  equally: EquallyVideoImage,
};

const VIDEOS = {
  Secure: SecureVideo,
  more: MoreVideo,
  people: PeopleVideo,
  equally: EquallyVideo,
};

export default function Vision() {
  const [selectedWord, selectWord] = useState('');
  const [loaded, setLoaded] = useState([]);

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
              onBlur={handleMouseOut}
            >
              {word}
              {' '}
            </span>
          ))}
        </h1>
      </div>
      {WORDS.map((word) => (
        <div
          key={word}
          css={[
            styles.overlay,
            { opacity: word === selectedWord ? 1 : 0 },
          ]}
        >
          <img
            css={styles.video}
            src={IMAGES[word]}
            alt=""
          />
          <video
            css={[
              styles.video,
              { opacity: loaded.includes(word) ? 1 : 0 },
            ]}
            autoPlay
            playsInline
            loop
            muted
            onLoadedData={() => setLoaded([...loaded, word])}
          >
            <source src={VIDEOS[word]} />
          </video>
        </div>
      ))}
    </section>
  );
}
