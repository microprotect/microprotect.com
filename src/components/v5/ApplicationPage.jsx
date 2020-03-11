/* @jsx jsx */

import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { jsx } from '@emotion/core';

import { setTester } from '../../appSlice';

import Section from './Section';
import ApplicationForm from './ApplicationForm';

import { BASE_MQ } from '../../styles/constants-v5';

const styles = {
  container: {
    margin: 0,
    [BASE_MQ]: {
      margin: 0,
    },
  },
};

export default function ApplicationPage({ t, product }) {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTester(true));
  }, []);

  return (
    <Section style={styles.container}>
      <ApplicationForm
        product={product}
        history={history}
        t={t}
      />
    </Section>
  );
}
