import React from 'react';

import BasicField from './BasicField';

export default function EmailField({ field, t }) {
  return (
    <BasicField field={field} type="email" t={t} />
  );
}
