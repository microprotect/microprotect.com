import React from 'react';

import BasicField from './BasicField';
import ZipcodeButton from '../ZipcodeButton';

export default function ZipcodeField({ field, t }) {
  const isKorea = true;

  return (
    <BasicField
      field={{ ...field, readOnly: isKorea }}
      type="number"
      t={t}
      additional={() => (
        isKorea && <ZipcodeButton label={t.form_search_zipcode} />
      )}
    />
  );
}
