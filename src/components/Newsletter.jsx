/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import { mq, imageReplacement } from '../styles/utils';

import { EmailIconImage, EmailSubmitImage } from '../assets';

const FORM_URL = 'https://microprotect.us4.list-manage.com/subscribe/post'
                 + '?u=da561f586b14fde34d404137a&amp;id=ce95d6ab5c';

const styles = {
  container: {
    position: 'relative',
    maxWidth: '400px',
    margin: '0 auto',
    fontSize: '1.1em',
    [mq(1024)]: {
      margin: 0,
    },
  },
  label: {
    display: 'none',
  },
  input: {
    display: 'block',
    margin: '0 auto',
    width: '100%',
    height: '2.5em',
    padding: '0 50px',
    border: 0,
    borderRadius: '4px',
    background: `#FFF url(${EmailIconImage}) 20px 50% no-repeat`,
    backgroundSize: '15px 14px',
    overflow: 'hidden',
    textAlign: 'center',
    '&::placeholder': {
      color: '#A2A2A2',
      textTransform: 'capitalize',
    },
  },
  button: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    display: 'block',
    width: '2.5em',
    height: '2.5em',
    border: 0,
    ...imageReplacement(EmailSubmitImage),
    backgroundSize: '15px',
  },
};

export default function Newsletter() {
  const handleSubmit = () => window.postMessage({ type: 'subscribe' }, '*');

  return (
    <form
      css={styles.container}
      method="POST"
      action={FORM_URL}
      target="_blank"
      onSubmit={handleSubmit}
    >
      <label
        css={styles.label}
        htmlFor="input-email"
      >
        E-mail address
      </label>
      <input
        css={styles.input}
        type="email"
        name="EMAIL"
        id="input-email"
        placeholder="Join our newsletter"
        required
      />
      <button
        css={styles.button}
        type="submit"
      >
        Subscribe
      </button>
    </form>
  );
}
