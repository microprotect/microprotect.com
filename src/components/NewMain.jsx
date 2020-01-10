import React from 'react';

import Vision from './Vision';
import Product from './Product';
import Partners from './Partners';

export default function Main({ t }) {
  return (
    <main>
      <Vision />
      <Product t={t} />
      <Partners />
    </main>
  );
}
