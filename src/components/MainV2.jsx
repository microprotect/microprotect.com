import React from 'react';

import Vision from './Vision';
import Insurance from './Insurance';
import BossVideo from './BossVideo';
import Product from './Product';
import Partners from './Partners';

export default function Main({ t }) {
  return (
    <main>
      <Vision />
      <Insurance t={t} />
      <BossVideo />
      <Product t={t} />
      <Partners />
    </main>
  );
}
