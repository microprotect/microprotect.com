import React from 'react';

import BasicField from './BasicField';

export default function DateField({ field, t }) {
  return (
    <BasicField field={field} type="date" t={t} />
  );
}
