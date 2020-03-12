import React from 'react';

import BasicField from './BasicField';

export default function PhoneField({ field, t }) {
  return (
    <BasicField field={field} type="tel" t={t} />
  );
}
