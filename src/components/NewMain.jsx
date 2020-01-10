import React from 'react';

import Vision from './Vision';
import Insurance from './Insurance';
import Product from './Product';
import Partners from './Partners';

export default function Main({ t }) {
  return (
    <main>
      <Vision />
      <Insurance t={t} />
      <Product t={t} />
      <Partners />
    </main>
  );
}
