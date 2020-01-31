/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Section from './Section';
import ListContainer from '../ListContainer';
import ListItem from '../ListItem';
import StrongText from '../StrongText';

import { BASE_MQ } from '../../styles/constants-v4';

import {
  WorksImage1,
  WorksImage2,
  WorksImage3,
  WorksImage4,
  WorksPlusImage,
  WorksRightImage,
  WorksLeftImage,
} from '../../assets/v4';

const FIGURES = [
  WorksImage1,
  WorksImage2,
  WorksImage3,
  WorksImage4,
];

const styles = {
  steps: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
  },
  step: (index) => ({
    width: '50%',
    paddingBottom: '6vw',
    fontFamily: 'S-CoreDream',
    fontSize: '4vw',
    textAlign: 'center',
    [BASE_MQ]: {
      width: ['23%', '23%', '30%', '24%'][index],
      padding: 0,
      fontSize: '1.5em',
    },
    '& b': {
      fontFamily: 'S-CoreDream-8',
    },
  }),
  figure: (index) => ({
    display: 'block',
    margin: '0 auto 2vw',
    marginTop: index < 3 ? 0 : '3vw',
    height: index < 3 ? '38vw' : '30vw',
    [BASE_MQ]: {
      marginTop: [0, '40%', 0, '17%'][index],
      width: ['70%', '63%', '80%', '60%'][index],
      height: 'auto',
    },
  }),
  symbol: (index) => ({
    position: 'absolute',
    width: '7vw',
    height: '7vw',
    transform: 'translate3d(-50%, -50%, 0)',
    background: `url(${WorksPlusImage}) 0 0 no-repeat`,
    backgroundSize: 'contain',
    ...[
      {
        top: '20%',
        left: '52%',
      },
      {
        top: '50%',
        left: '48%',
        backgroundImage: `url(${WorksLeftImage})`,
      },
      {
        top: '73%',
        left: '52%',
        backgroundImage: `url(${WorksRightImage})`,
      },
    ][index],
    [BASE_MQ]: {
      width: '2.5em',
      height: '2.5em',
      top: 'calc((100% - 5em) * .5)',
      ...[
        {
          left: '23.5%',
        },
        {
          left: '45.5%',
          backgroundImage: `url(${WorksRightImage})`,
        },
        {
          left: '77.5%',
        },
      ][index],
    },
  }),
  symbolImage: {
    width: '6vw',
  },
};

function Step({ t, index }) {
  return (
    <ListItem style={styles.step(index)}>
      <img
        css={styles.figure(index)}
        src={FIGURES[index]}
        alt=""
      />
      <StrongText value={t[`how_works${index + 1}`]} />
    </ListItem>
  );
}

function Symbol({ index }) {
  return (
    <div css={styles.symbol(index)} />
  );
}

export default function HowWorks({ t }) {
  return (
    <Section>
      <ListContainer style={styles.steps}>
        {[...Array(7)].map((_, i) => i)
          .map((index) => (
            index % 2 === 0
              ? <Step key={index} t={t} index={index / 2} />
              : <Symbol key={index} index={(index - 1) / 2} />
          ))}
      </ListContainer>
    </Section>
  );
}
