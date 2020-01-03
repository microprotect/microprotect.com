import React from 'react';

import Subscribe from './Subscribe';
import Partners from './Partners';
import Describe from './Describe';
import Video from './Video';
import More from './More';

export default function Main({ t }) {
  const handlePlay = () => window.postMessage({ type: 'play-video' }, '*');

  return (
    <main>
      <h1>
        Secure more people equally
      </h1>
      <section className="introduction">
        <Video
          videoId="GkmM2pbf2AE"
          onPlay={handlePlay}
        />
      </section>
      <Describe t={t} />
      <Subscribe t={t} />
      <More />
      <Partners />
    </main>
  );
}
