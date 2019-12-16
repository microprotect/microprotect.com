import React from 'react';

import { t } from '../locale';

export default function Describe() {
    return (
        <section className="description">
            <ul>
                <li>{t.description1}</li>
                <li>{t.description2}</li>
            </ul>
        </section>
    );
}
