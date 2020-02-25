/* @jsx jsx */

import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { jsx } from '@emotion/core';

import Home from './Home';
import ApplicationForm from './ApplicationForm';

const styles = {
  container: {
    fontFamily: 'Noto Sans KR',
    fontSize: '4vw',
    '& a': {
      textDecoration: 'none',
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
          <Route path="/">
            <Home t={t} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
