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
    margin: '15px auto 40px',
    width: '90%',
    [mq(900)]: {
      width: '60%',
      maxWidth: '1200px',
    },
  },
  label: {
    display: 'none',
  },
  input: {
    display: 'block',
    margin: '0 auto',
    width: '100%',
    height: '50px',
    padding: '0 30px',
    border: 0,
    borderRadius: '50px',
    background: `#FFF url(${EmailIconImage}) 40px 50% no-repeat`,
    backgroundSize: '15px 14px',
    fontSize: '20px',
    overflow: 'hidden',
    textAlign: 'center',
    [mq(900)]: {
      height: '100px',
      backgroundSize: '29px 27px',
      fontSize: '40px',
    },
    '&::placeholder': {
      color: '#A2A2A2',
    },
  },
  button: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    display: 'block',
    width: '50px',
    height: '50px',
    border: 0,
    ...imageReplacement(EmailSubmitImage),
    backgroundSize: '15px',
    [mq(900)]: {
      width: '100px',
      height: '100px',
      backgroundSize: '27px',
    },
  },
};

export default function Subscribe() {
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
        placeholder="Your email address"
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
