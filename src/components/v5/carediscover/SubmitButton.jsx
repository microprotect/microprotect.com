/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import { BASE_MQ } from '../../../styles/constants-v5';

const styles = {
  button: {
    margin: '2em -5% 0',
    padding: '.5em',
    width: '100vw',
    border: 0,
    fontSize: '1.8em',
    background: 'linear-gradient(135deg, #7AC7F8 0%, #6594F8 100%)',
    color: '#FFF',
    [BASE_MQ]: {
      margin: '2em 0 0',
      width: '100%',
    },
  },
};

export default function SubmitButton({ t }) {
  return (
    <button
      css={styles.button}
      type="submit"
    >
      {t.button_submit_application}
    </button>
  );
}
