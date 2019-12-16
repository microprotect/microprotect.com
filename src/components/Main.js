import React from 'react';

import Subscribe from './Subscribe';
import Partners from './Partners';
import Describe from './Describe';

export default function Main() {
    return (
        <main>
            <h1>Secure more people equally</h1>
            <section className="introduction">
                <div className="video">
                    <iframe src="https://www.youtube.com/embed/GkmM2pbf2AE?controls=0&rel=0"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
            </section>
            <Describe/>
            <Subscribe/>
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
