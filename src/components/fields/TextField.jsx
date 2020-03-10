import React from 'react';

import BasicField from './BasicField';

export default function TextField({ field, t }) {
  return (
    <BasicField field={field} type="text" t={t} />
  );
}
