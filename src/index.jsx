import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import { setLocale } from './appSlice';

import App from './App.jsx';

import './google-analytics';

const { location } = window;

const locale = new Map([...new URLSearchParams(location.search)]).get('locale')
    || (navigator.language || 'ko').slice(0, 2);

store.dispatch(setLocale(locale));

const el = document.getElementById('app');
el.innerHTML = '';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  el,
);
