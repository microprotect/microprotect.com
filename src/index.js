import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

require('./locale');

const el = document.getElementById('app');
el.innerHTML = '';

ReactDOM.render(<App/>, el);

// Google Analytics

if (location.hostname === 'microprotect.com') {
    require('./google-analytics');
}
