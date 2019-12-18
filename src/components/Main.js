import React from 'react';

import YouTube from 'react-youtube';

import Subscribe from './Subscribe';
import Partners from './Partners';
import Describe from './Describe';

export default function Main({t}) {
    const handlePlay = () => window.postMessage({type: 'play-video'}, '*');

    return (
        <main>
            <h1>Secure more people equally</h1>
            <section className="introduction">
                <div className="video">
                    <YouTube
                        videoId="GkmM2pbf2AE"
                        opts={{
                            playerVars: {
                                controls: 0,
                                rel: 0,
                            }
                        }}
                        onPlay={handlePlay}
                    />
                </div>
            </section>
            <Describe t={t}/>
            <Subscribe t={t}/>
            <section className="more">
                <a href="https://www.youtube.com/playlist?list=PLYnkfDX2exRhsXZ3WrgrntFgmeJ1K8IvF"
                   target="_blank"
                >
                    See more videos
                </a>
            </section>
            <Partners/>
        </main>
    );
}
