/* global FB */

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

const version = parseInt(params.get('version') || 5, 10);

store.dispatch(setVersion(version));

if (version < 5) {
  window.fbAsyncInit = () => {
    FB.init({ xfbml: true, version: 'v3.2' });
  };

  const id = 'facebook-jssdk';

  if (!document.getElementById(id)) {
    const script = document.createElement('script');
    script.id = id;
    script.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';

    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  }
}

const el = document.getElementById('app');
el.innerHTML = '';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  el,
);
