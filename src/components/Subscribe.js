import React from 'react';

import { t } from '../locale';

export default function Subscribe() {
    return (
        <section className="subscribe">
            <form method="POST"
                  action="https://microprotect.us4.list-manage.com/subscribe/post?u=da561f586b14fde34d404137a&amp;id=ce95d6ab5c"
                  target="_blank"
            >
                <p>{t.subscribe1}</p>
                <div className="field">
                    <label htmlFor="input-email">E-mail address</label>
                    <input type="email" name="EMAIL" id="input-email"
                           placeholder="Your email address"
                           required
                    />
                    <button type="submit">Subscribe</button>
                </div>
                <p>{t.subscribe2}</p>
            </form>
        </section>
    );
}
