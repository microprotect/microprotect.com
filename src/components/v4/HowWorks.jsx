/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Section from './Section';
import StrongText from '../StrongText';

import {
  listContainer,
  listItem,
} from '../../styles/list';
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
    ...listContainer,
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
  },
  step: {
    ...listItem,
    width: '50%',
    paddingBottom: '6vw',
    fontFamily: 'S-CoreDream',
    fontSize: '4vw',
    textAlign: 'center',
    [BASE_MQ]: {
      width: '25%',
      padding: 0,
      fontSize: '1.5em',
    },
    '& b': {
      fontFamily: 'S-CoreDream-8',
    },
  },
  figure: {
    margin: '0 auto 2vw',
    display: 'block',
    height: '35vw',
    [BASE_MQ]: {
      width: '80%',
      height: 'auto',
    },
  },
  symbol: (index) => ({
    position: 'absolute',
    width: '6vw',
    height: '6vw',
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
          left: '25%',
        },
        {
          left: '50%',
          backgroundImage: `url(${WorksRightImage})`,
        },
        {
          left: '75%',
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
    <li css={styles.step}>
      <img
        css={styles.figure}
        src={FIGURES[index]}
        alt=""
      />
      <StrongText value={t[`how_works${index + 1}`]} />
    </li>
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
      <ul css={styles.steps}>
        {[...Array(7)].map((_, i) => i)
          .map((index) => (
            index % 2 === 0
              ? <Step key={index} t={t} index={index / 2} />
              : <Symbol key={index} index={(index - 1) / 2} />
          ))}
      </ul>
    </Section>
  );
}
