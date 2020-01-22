import React from 'react';

import Eyecatch from './Eyecatch';
import KeyMessage from './KeyMessage';

export default function Main({ t }) {
  return (
    <main>
      <Eyecatch />
      <KeyMessage text={t.key_message1} />
      <KeyMessage text={t.key_message2} />
    </main>
  );
}
