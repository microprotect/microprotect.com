/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Video from './Video';
import StrongText from './StrongText';
import AboutCEO from './AboutCEO';
import AboutNeo from './AboutNeo';
import Member from './Member';

import members from '../data/members';

import { mq } from '../styles/utils';
import { listContainer, listItem } from '../styles/list';

const BASE_MQ = mq(640);

const styles = {
  container: {
    padding: '8em 5%',
    color: '#2c3442',
  },
  title: {
    margin: 0,
    fontFamily: 'Helvetica',
    fontSize: '9vw',
    fontWeight: 'bold',
    lineHeight: '120%',
    textTransform: 'uppercase',
    [BASE_MQ]: {
      fontSize: '5vw',
    },
    [mq(1800)]: {
      fontSize: '5em',
    },
  },
  description: {
    margin: '2em 0',
    maxWidth: '1024px',
    fontFamily: 'Helvetica',
    fontSize: '5vw',
    [BASE_MQ]: {
      fontSize: '2.5vw',
    },
    [mq(1800)]: {
      fontSize: '2em',
    },
  },
  video: {
    margin: '3em 0',
    maxWidth: '800px',
  },
  membersTitle: {
    margin: '2em 0 0',
    fontFamily: 'Helvetica',
    fontSize: '1.5em',
  },
  member: {
    ...listItem,
    marginTop: '1.5em',
  },
};

function BossVideo() {
  const handlePlay = () => window.postMessage({ type: 'play-video' }, '*');

  return (
    <div css={styles.video}>
      <Video
        videoId="GkmM2pbf2AE"
        onPlay={handlePlay}
      />
    </div>
  );
}

function Members({ title, category }) {
  return (
    <>
      <h2 css={styles.membersTitle}>
        {title}
      </h2>
      <ul css={listContainer}>
        {members.filter((member) => member.category === category)
          .map((member) => (
            <li
              css={styles.member}
              key={member.name}
            >
              <Member member={member} />
            </li>
          ))}
      </ul>
    </>
  );
}

export default function AboutUs({ t }) {
  return (
    <main css={styles.container}>
      <h1 css={styles.title}>
        About us
      </h1>
      <div css={styles.description}>
        <StrongText value={t.about_us_description} />
      </div>
      <BossVideo />
      <AboutCEO />
      <AboutNeo />
      <Members
        title="System development"
        category="system"
      />
      <Members
        title="Financial/Management support/Legal"
        category="management"
      />
      <Members
        title="Product Development/Marketing"
        category="product"
      />
    </main>
  );
}
