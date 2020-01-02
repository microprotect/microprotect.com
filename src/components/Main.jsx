import React from 'react';

import Subscribe from './Subscribe';
import Partners from './Partners';
import Describe from './Describe';
import Video from './Video';

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
      <section className="more">
        <a
          href="https://www.youtube.com/playlist?list=PLYnkfDX2exRhsXZ3WrgrntFgmeJ1K8IvF"
          target="_blank"
          rel="noopener noreferrer"
        >
          See more videos
        </a>
      </section>
      <Partners />
    </main>
  );
}
