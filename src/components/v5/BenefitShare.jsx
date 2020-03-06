/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Section from './Section';
import HomeTitle from './HomeTitle';
import StrongText from '../StrongText';
import ListContainer from '../ListContainer';
import ListItem from '../ListItem';
import Box from '../Box';
import ArrowButton from './ArrowButton';

import { BASE_MQ } from '../../styles/constants-v5';

import {
  DonutCompleteImage,
  DonutPiecesImage,
  ArrowDownImage,
} from '../../assets/v5';

const styles = {
  descriptions: {
    [BASE_MQ]: {
      margin: '0 0 3em',
    },
  },
  description: {
    margin: '1em 0',
    marginLeft: '1.3em',
    color: '#E3EAF5',
    listStyle: 'square outside',
    '& > *': {
      color: '#000',
    },
    [BASE_MQ]: {
      margin: '1.5em 0',
      marginLeft: '3.5em',
    },
  },
  donuts: {
    margin: '0 auto 3em',
    [BASE_MQ]: {
      width: '60%',
    },
  },
  image: {
    display: 'block',
    margin: '0 auto',
    width: '100%',
    '&:first-of-type': {
      width: '36%',
    },
  },
  arrow: {
    width: '1em',
  },
  caption: {
    marginBottom: '.5em',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  captions: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '0 8%',
  },
  more: {
    position: 'relative',
    padding: 0,
    fontSize: '1em',
    '& a': {
      display: 'block',
      padding: '1.5em',
    },
    '& b': {
      fontSize: '1.2em',
      [BASE_MQ]: {
        display: 'none',
      },
    },
    [BASE_MQ]: {
      margin: '0 auto',
      padding: 0,
      width: '70%',
      fontSize: '1.3em',
      textAlign: 'center',
      '& br': {
        display: 'none',
      },
    },
  },
  button: {
    right: '1em',
    [BASE_MQ]: {
      marginLeft: '.6em',
    },
  },
};

export default function BenefitShare({ t }) {
  return (
    <Section>
      <HomeTitle value={t.benefit_share_title} />
      <ListContainer style={styles.descriptions}>
        {[1, 2].map((index) => (
          <ListItem
            key={index}
            style={styles.description}
          >
            <StrongText value={t[`benefit_share_description${index}`]} />
          </ListItem>
        ))}
      </ListContainer>
      <div css={styles.donuts}>
        <img
          css={styles.image}
          src={DonutCompleteImage}
          alt=""
        />
        <div css={styles.caption}>
          {t.benefit_share_caption1}
        </div>
        <img
          css={[styles.image, styles.arrow]}
          src={ArrowDownImage}
          alt=""
        />
        <img
          css={styles.image}
          src={DonutPiecesImage}
          alt=""
        />
        <div css={styles.captions}>
          <div css={styles.caption}>
            {t.benefit_share_caption2}
          </div>
          <div css={styles.caption}>
            {t.benefit_share_caption3}
          </div>
          <div css={styles.caption}>
            {t.benefit_share_caption4}
          </div>
        </div>
      </div>
      <Box style={styles.more}>
        <a
          href="https://microprotect.give.asia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StrongText value={t.benefit_share_more} />
          <ArrowButton
            style={styles.button}
            pink
            label="자세히 보기"
          />
        </a>
      </Box>
    </Section>
  );
}
