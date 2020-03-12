/* global daum */
/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

const styles = {
  button: {
    marginLeft: '.5em',
    padding: '.5em 1em',
    border: '1px solid #526991',
    background: '#526991',
    color: '#FFF',
    fontSize: '1em',
    cursor: 'pointer',
  },
};

function handleClick() {
  const postcode = new daum.Postcode({
    oncomplete: () => {
      // TODO: fill address informations
    },
  });
  postcode.open();
}

export default function ZipcodeButton({ label }) {
  return (
    <button
      css={styles.button}
      type="button"
      onClick={handleClick}
    >
      {label}
    </button>
  );
}
