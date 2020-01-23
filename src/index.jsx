import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import { setLocale, setVersion } from './appSlice';

import App from './App';

import './google-analytics';

import './give-asia';

import './assets/css/main.css';

const { location } = window;

const params = new Map([...new URLSearchParams(location.search)]);

const locale = params.get('locale') || (navigator.language || 'ko').slice(0, 2);

store.dispatch(setLocale(locale));

const version = parseInt(params.get('version') || 2, 10);

store.dispatch(setVersion(version));

const el = document.getElementById('app');
el.innerHTML = '';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  el,
);
