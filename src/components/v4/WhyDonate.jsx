/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Section from './Section';
import Title from './Title';
import Text from '../Text';
import Box from './Box';
import ListContainer from '../ListContainer';
import ListItem from '../ListItem';

import {
  BASE_MQ,
  backgroundColor,
  darkBlue,
} from '../../styles/constants-v4';

import {
  WhyThanksImage,
  WhyBackgroundImage,
} from '../../assets/v4';

const styles = {
  problem1: {
    marginTop: '8vw',
    fontFamily: 'S-CoreDream',
    fontSize: '4vw',
    [BASE_MQ]: {
      marginTop: '1.8em',
      fontSize: '1.6em',
    },
  },
  problem2: {
    marginTop: '3vw',
    fontFamily: 'S-CoreDream-8',
    fontSize: '4vw',
    lineHeight: '140%',
    [BASE_MQ]: {
      marginTop: '.8em',
      fontSize: '1.8em',
    },
  },
  content: {
    position: 'relative',
  },
  questions: {
    zIndex: 3,
    position: 'relative',
    marginTop: '5vw auto 0',
    fontFamily: 'S-CoreDream',
    fontSize: '3.5vw',
    fontStyle: 'italic',
    [BASE_MQ]: {
      marginTop: '5em',
      fontSize: '1.6em',
      textAlign: 'right',
    },
  },
  question: (index) => ({
    marginTop: '3vw',
    paddingLeft: ['10%', '5%', '5%'][index],
    color: darkBlue,
    textAlign: ['left', 'right', 'left'][index],
    [BASE_MQ]: {
      marginTop: '.5em',
      paddingLeft: 0,
      paddingRight: ['8%', '5%', '6%'][index],
      textAlign: 'right',
    },
  }),
  questionBackground: {
    display: 'none',
    [BASE_MQ]: {
      zIndex: 0,
      position: 'absolute',
      display: 'block',
      top: '-130px',
      right: '-50px',
      width: '822px',
      height: '491px',
      background: `url(${WhyBackgroundImage}) 0 0 no-repeat`,
    },
  },
  box: {
    zIndex: 3,
    position: 'relative',
    marginTop: '72vw',
    padding: 0,
    [BASE_MQ]: {
      marginTop: '2em',
      padding: 0,
    },
  },
  solutionTitle: {
    position: 'relative',
    padding: '5vw',
    fontFamily: 'S-CoreDream-8',
    fontSize: '4vw',
    lineHeight: '140%',
    [BASE_MQ]: {
      width: '95%',
      padding: '2em',
      paddingLeft: '52%',
      fontSize: '1.8em',
    },
  },
  family: {
    position: 'absolute',
    top: '-70vw',
    left: '50%',
    transform: 'translate3d(-50%, 0, 0)',
    display: 'block',
    height: '70vw',
    [BASE_MQ]: {
      top: 'auto',
      bottom: 0,
      left: '2%',
      transform: 'translate3d(0, 0, 0)',
      maxWidth: '50%',
      height: 'auto',
    },
  },
  solutionDescription: {
    padding: '5vw',
    fontFamily: 'Source Sans Pro',
    fontsize: '3vw',
    backgroundColor,
    [BASE_MQ]: {
      zIndex: 1,
      position: 'relative',
      padding: '2em 3em',
      fontSize: '1.4em',
    },
  },
};

export default function WhyDonate({ t }) {
  return (
    <Section>
      <Title value={t.why_donate_title} />
      <div css={styles.problem1}>
        <Text value={t.why_donate_problem1} />
      </div>
      <div css={styles.problem2}>
        <Text value={t.why_donate_problem2} />
      </div>
      <div css={styles.content}>
        <div css={styles.questionBackground} />
        <ListContainer style={styles.questions}>
          {[0, 1, 2].map((index) => (
            <ListItem
              key={index}
              style={styles.question(index)}
            >
              <Text value={t[`why_donate_question${index + 1}`]} />
            </ListItem>
          ))}
        </ListContainer>
        <Box style={styles.box}>
          <div css={styles.solutionTitle}>
            <Text value={t.why_donate_solution_title} />
            <img
              css={styles.family}
              src={WhyThanksImage}
              alt=""
            />
          </div>
          <div css={styles.solutionDescription}>
            <Text value={t.why_donate_solution_description} />
          </div>
        </Box>
      </div>
    </Section>
  );
}
