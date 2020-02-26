/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import HomeTitle from './HomeTitle';
import Text from '../Text';
import StrongText from '../StrongText';
import ListContainer from '../ListContainer';
import ListItem from '../ListItem';
import Box from '../Box';
import Link from '../Link';
import ArrowButton from './ArrowButton';

import {
  DonutCompleteImage,
  DonutPiecesImage,
  ArrowDownImage,
} from '../../assets/v5';

const styles = {
  container: {
    padding: '7vw 5%',
  },
  description: {
    margin: '1em 0',
    marginLeft: '1.3em',
    color: '#E3EAF5',
    listStyle: 'square outside',
    '& > *': {
      color: '#000',
    },
  },
  donuts: {
    margin: '0 0 3em',
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
    },
  },
  button: {
    right: '1em',
  },
};

export default function BenefitShare({ t }) {
  return (
    <div css={styles.container}>
      <HomeTitle value={t.benefit_share_title} />
      <ListContainer>
        {[1, 2].map((index) => (
          <ListItem
            key={index}
            style={styles.description}
          >
            <Text value={t[`benefit_share_description${index}`]} />
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
        <Link to="/?version=5">
          <StrongText value={t.benefit_share_more} />
          <ArrowButton style={styles.button} pink />
        </Link>
      </Box>
    </div>
  );
}
