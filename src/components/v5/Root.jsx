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

export default function Root({ t }) {
  return (
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
  );
}
