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

import { BASE_MQ } from '../../styles/constants-v4';
import { mq } from '../../styles/utils';

import {
  DonutCompleteImage,
  DonutPiecesImage,
  ArrowDownImage,
} from '../../assets/v5';

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
  descriptions: {
    [BASE_MQ]: {
      display: 'flex',
      justifyContent: 'space-around',
      padding: '0 15%',
      fontSize: '.8em',
    },
    [mq(1800)]: {
      fontSize: '.5em',
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
      margin: '2em 0',
    },
  },
  donuts: {
    margin: '0 0 3em',
    [BASE_MQ]: {
      margin: '1.5em 0',
    },
  },
  image: {
    display: 'block',
    margin: '0 auto',
    width: '100%',
    '&:first-of-type': {
      width: '36%',
    },
    [BASE_MQ]: {
      width: '90%',
      '&:first-of-type': {
        width: '25%',
      },
      '&:nth-of-type(2)': {
        width: '5%',
      },
    },
    [mq(1800)]: {
      width: '65%',
      '&:first-of-type': {
        width: '18%',
      },
      '&:nth-of-type(2)': {
        width: '8%',
        paddingLeft: '1em',
      },
    },
  },
  arrow: {
    width: '1em',
  },
  captions: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '0 8%',
    [mq(1800)]: {
      padding: '0 22%',
    },
  },
  caption: {
    marginBottom: '.5em',
    fontWeight: 'bold',
    textAlign: 'center',
    [mq(1800)]: {
      paddingLeft: '1em',
    },
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
    [BASE_MQ]: {
      width: '70%',
      margin: '0 auto',
      textAlign: 'left',
      padding: 0,
      '& a': {
        padding: '2em',
        paddingLeft: '5em',
      },
    },
  },
  button: {
    right: '1em',
    [BASE_MQ]: {
      right: '10%',
    },
    [mq(1800)]: {
      right: '4%',
    },
  },
};

export default function BenefitShare({ t }) {
  return (
    <div css={styles.container}>
      <div css={styles.title}>
        <HomeTitle value={t.benefit_share_title} />
      </div>
      <ListContainer style={styles.descriptions}>
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
