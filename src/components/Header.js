import React from 'react';

import { getLocale } from '../locale';

export default function Header() {
    const locale = getLocale();
    return (
        <header className={`locale-${locale}`}>
            <div className="logo">microprotect</div>
            <ul className="languages">
                <li><a href="?locale=ko" className="locale-ko">Kr</a></li>
                <li><a href="?locale=en" className="locale-en">En</a></li>
            </ul>
        </header>
    );
}
