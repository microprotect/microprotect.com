/* global daum */
/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

const styles = {
  button: {
    fontSize: '.9em',
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
