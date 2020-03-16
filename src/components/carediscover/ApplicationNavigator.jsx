/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import {
  BASE_MQ,
  CONTENT_PADDING,
} from '../../styles/constants-v5';
import { imageReplacement } from '../../styles/utils';

import { BackButtonImage } from '../../assets/v5';

const styles = {
  container: {
    position: 'relative',
    height: '4em',
    [BASE_MQ]: {
      padding: `0 ${CONTENT_PADDING}`,
    },
  },
  button: {
    position: 'absolute',
    top: '1em',
    left: 0,
    width: '2em',
    height: '2em',
    border: 0,
    ...imageReplacement(BackButtonImage),
    backgroundSize: '45%',
  },
};

export default function ApplicationNavigator({ step, setStep, history }) {
  const handleClick = () => {
    if (step === 0) {
      history.push('/insurances/care-discover');
      return;
    }
    setStep(step - 1);
  };

  return (
    <div css={styles.container}>
      <button
        css={styles.button}
        type="button"
        onClick={handleClick}
      >
        Back
      </button>
    </div>
  );
}
