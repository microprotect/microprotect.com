/* @jsx jsx */

import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { jsx } from '@emotion/core';

import Home from './Home';
import InsurancePage from './InsurancePage';
import ApplicationForm from './ApplicationForm';

import { BASE_MQ } from '../../styles/constants-v5';

const styles = {
  container: {
    fontFamily: 'Noto Sans KR',
    fontSize: '4vw',
    '& a': {
      textDecoration: 'none',
    },
    [BASE_MQ]: {
      fontSize: '1.5em',
    },
  },
};

export default function Root({ t }) {
  return (
    <div css={styles.container}>
      <Router>
        <Switch>
          <Route path="/applications/new">
            <ApplicationForm />
          </Route>
          <Route path="/insurances/care-discover">
            <InsurancePage t={t} product="carediscover" />
          </Route>
          <Route path="/insurances/care-college">
            <InsurancePage t={t} product="carecollege" />
          </Route>
          <Route path="/">
            <Home t={t} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
