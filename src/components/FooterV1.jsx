/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Text from './Text';

import { mq } from '../styles/utils';

const styles = {
  container: {
    padding: '5em 0',
    background: '#899D9B',
    color: '#CAD3D2',
    fontSize: '1rem',
    '& a': {
      color: '#CAD3D2',
      textDecoration: 'none',
    },
  },
  wrapper: {
    margin: '0 auto',
    width: '90%',
    [mq(1600)]: {
      width: '1400px',
    },
  },
  company: {
    fontSize: '1.3em',
    '& p': {
      marginBottom: '0.8em',
    },
  },
  socialMedias: {
    '& ul': {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
    '& li': {
      display: 'inline-block',
      marginRight: '.6em',
    },
  },
  copyright: {
    marginTop: '1.2em',
  },
};

export default function FooterV1({ t }) {
  return (
    <footer css={styles.container}>
      <div css={styles.wrapper}>
        <div css={styles.company}>
          <p>
            <a href="mailto:hello@microprotect.com">hello@microprotect.com</a>
          </p>
          <p>
            <Text value={t.address} />
          </p>
        </div>
        <div css={styles.socialMedias}>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/111858463618112"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/microprotect/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCWWiBU0hQ7IRkcylMoM2k6Q"
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/microprotect"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div css={styles.copyright}>
          Copyright ⓒ microprotect All Right Reserved.
        </div>
      </div>
    </footer>
  );
}
