import React from 'react';

import CareDiscoverApplicationForm from './carediscover/ApplicationForm';

export default function ApplicationForm({ t, product }) {
  const Form = {
    carediscover: CareDiscoverApplicationForm,
  }[product];

  return (
    <Form t={t} />
  );
}
