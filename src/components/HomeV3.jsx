import React from 'react';

import Eyecatch from './Eyecatch';
import KeyMessage from './KeyMessage';

export default function HomeV3({ t }) {
  return (
    <main>
      <Eyecatch />
      <KeyMessage
        text={t.key_message1}
        target="/free-insurance"
      />
      <KeyMessage
        text={t.key_message2}
        target="free-insurance"
      />
    </main>
  );
}
