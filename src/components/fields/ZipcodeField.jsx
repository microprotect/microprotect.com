import React from 'react';

import BasicField from './BasicField';
import ZipcodeButton from '../ZipcodeButton';

const styles = {
  zipCode: {
    width: '6em',
    textAlign: 'center',
  },
};

export default function ZipcodeField({ field, t }) {
  const isKorea = true;

  return (
    <BasicField
      field={{ ...field, readOnly: isKorea }}
      style={styles.zipCode}
      type="number"
      t={t}
      additional={() => (
        isKorea && <ZipcodeButton label={t.form_search_zipcode} />
      )}
    />
  );
}
