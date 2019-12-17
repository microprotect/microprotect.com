import React from 'react';

export default function Describe({t}) {
    return (
        <section className="description">
            <ul>
                <li>{t.description1}</li>
                <li>{t.description2}</li>
            </ul>
        </section>
    );
}
