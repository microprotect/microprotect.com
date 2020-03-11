/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import ListContainer from '../../ListContainer';
import ListItem from '../../ListItem';

import {
  ApplicationStep1OnImage,
  ApplicationStep2OnImage,
  ApplicationStep3OnImage,
  ApplicationStep1OffImage,
  ApplicationStep2OffImage,
  ApplicationStep3OffImage,
} from '../../../assets/v5';

const images = {
  on: [
    ApplicationStep1OnImage,
    ApplicationStep2OnImage,
    ApplicationStep3OnImage,
  ],
  off: [
    ApplicationStep1OffImage,
    ApplicationStep2OffImage,
    ApplicationStep3OffImage,
  ],
};

const styles = {
  steps: {
    display: 'flex',
    marginBottom: '2em',
  },
  step: {
    width: '33.3%',
  },
  button: (index) => ({
    display: 'block',
    paddingTop: '4em',
    paddingBottom: '1em',
    width: '100%',
    border: 0,
    borderBottom: '2px solid #CCD6E7',
    background: `url(${images.off[index]}) 50% 0 no-repeat`,
    backgroundSize: '4em',
    color: '#CCD6E7',
    textAlign: 'center',
  }),
  active: (index) => ({
    borderColor: '#526991',
    backgroundImage: `url(${images.on[index]})`,
    color: '#526991',
  }),
};

export default function ApplicationSteps({ step, setStep }) {
  return (
    <ListContainer style={styles.steps}>
      {['가입정보', '방문국가 정보', '결제'].map((text, index) => (
        <ListItem
          key={text}
          style={styles.step}
        >
          <button
            type="button"
            css={[
              styles.button(index),
              index === step ? styles.active(index) : {},
            ]}
            onClick={() => index < step && setStep(index)}
          >
            {text}
          </button>
        </ListItem>
      ))}
    </ListContainer>
  );
}
