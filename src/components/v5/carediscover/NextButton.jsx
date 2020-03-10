/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

const styles = {
  button: {
    marginTop: '2em',
    padding: '.5em',
    width: '100%',
    border: 0,
    fontSize: '1.8em',
    background: 'linear-gradient(135deg, #7AC7F8 0%, #6594F8 100%)',
    color: '#FFF',
  },
};

export default function NextButton({ t, onClick }) {
  return (
    <button
      css={styles.button}
      type="button"
      onClick={onClick}
    >
      {t.form_next_button}
    </button>
  );
}
