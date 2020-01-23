/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Member from './Member';

import { neo } from '../data/members';

const styles = {
  container: {
    margin: '4em 0',
  },
  title: {
    margin: '.5em 0',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: '1.5em',
  },
};

export default function AboutNeo() {
  return (
    <>
      <h2 css={styles.title}>
        Germany general manager
      </h2>
      <Member member={neo} />
    </>
  );
}
