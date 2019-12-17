import React from 'react';

export default function Footer({t}) {
    return (
        <footer>
            <div className="wrapper">
                <div className="company">
                    <p>
                        <a href="mailto:hello@microprotect.com">hello@microprotect.com</a>
                    </p>
                    <p>
                        {t.address.split('\n').map(i => <span key={i}>{i}<br/></span>)}
                    </p>
                </div>
                <div className="social-medias">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/111858463618112" target="_blank">
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/microprotect/" target="_blank">
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCWWiBU0hQ7IRkcylMoM2k6Q"
                               target="_blank"
                            >
                                Youtube
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/microprotect" target="_blank">
                                Twitter
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="copyright">
                    Copyright ⓒ microprotect All Right Reserved.
                </div>
            </div>
        </footer>
    );
}
