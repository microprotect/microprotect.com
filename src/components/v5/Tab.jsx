/* @jsx jsx */

import React, { useState } from 'react';

import { jsx } from '@emotion/core';

import {
  BrowserRouter as Route,
  Switch,
  Link,
  useRouteMatch,
} from 'react-router-dom';

import ListContainer from '../ListContainer';
import ListItem from '../ListItem';
import InsuranceIntroduction from './InsuranceIntroduction';
import InsuranceCoverage from './InsuranceCoverage';
import InsuranceNotice from './InsuranceNotice';

const pages = [
  'introduction',
  'coverage',
  'notice',
];

const styles = {
  container: {
    position: 'relative',
    margin: '-3em 0 0',
    background: '#FFF',
    borderTopLeftRadius: '3.5em',
    borderTopRightRadius: '3.5em',
  },
  tabs: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '.3em 1.5em 0',
    borderBottom: '1px solid #D1D6DE',
  },
  tab: {
    display: 'block',
    padding: '1em .5em ',
    color: '#D1D6DE',
    fontSize: '1.3em',
    '&:hover': {
      color: '#0D5DED',
    },
  },
  active: {
    color: '#0D5DED',
    borderBottom: '1px solid #0D5DED',
    backgroundColor: 'transparent',
  },
};

export default function Tabs({ t, product }) {
  const [pageIndex, setPage] = useState(1);

  const { path } = useRouteMatch();

  return (
    <div style={styles.container}>
      <ListContainer style={styles.tabs}>
        {[1, 2, 3].map((index) => (
          <ListItem key={index} inline>
            <Link
              css={[
                styles.tab,
                pageIndex === index ? styles.active : {},
              ]}
              to={`${path}/${pages[index - 1]}?version=5`}
              onClick={() => setPage(index)}
            >
              {t[`insurance_tab_title${index}`]}
            </Link>
          </ListItem>
        ))}
      </ListContainer>

      <Switch>
        <Route exact path={`${path}`}>
          <InsuranceIntroduction t={t} product={product} />
        </Route>
        <Route path={`${path}/${pages[0]}`}>
          <InsuranceIntroduction t={t} product={product} />
        </Route>
        <Route path={`${path}/${pages[1]}`}>
          <InsuranceCoverage product={product} />
        </Route>
        <Route path={`${path}/${pages[2]}`}>
          <InsuranceNotice t={t} product={product} />
        </Route>
      </Switch>
    </div>
  );
}
