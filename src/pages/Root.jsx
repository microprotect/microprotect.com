/* @jsx jsx */

import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { jsx } from '@emotion/core';

import HomePage from './HomePage';
import AboutUsPage from './AboutUsPage';
import PartnersPage from './PartnersPage';
import FreeInsurancePage from './FreeInsurancePage';
import InsurancePage from './InsurancePage';
import MyFriendPage from './MyFriendPage';
import ChatBubble from '../components/ChatBubble';

import {
  BASE_MQ,
  backgroundColor,
} from '../styles/constants-v5';

const styles = {
  container: {
    backgroundColor,
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

export default function Root({ t, locale }) {
  return (
    <div css={styles.container}>
      <ChatBubble />
      <Router>
        <Switch>
          <Route path="/home">
            <HomePage t={t} />
          </Route>
          <Route path="/about-us">
            <AboutUsPage t={t} />
          </Route>
          <Route path="/partners">
            <PartnersPage t={t} />
          </Route>
          <Route path="/free-insurance">
            <FreeInsurancePage t={t} locale={locale} />
          </Route>
          <Route path="/insurances/care-discover">
            <InsurancePage t={t} product="carediscover" />
          </Route>
          <Route path="/insurances/care-college">
            <InsurancePage t={t} product="carecollege" />
          </Route>
          <Route path="/insurances/private-insurance">
            <InsurancePage t={t} product="privateinsurance" />
          </Route>
          <Route path="/myfriend">
            <MyFriendPage t={t} />
          </Route>
          <Route path="/">
            <FreeInsurancePage t={t} locale={locale} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
