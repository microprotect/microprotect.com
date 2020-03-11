import React from 'react';

import CareDiscoverApplicationForm from './carediscover/ApplicationForm';

export default function ApplicationForm({ product, history, t }) {
  const Form = {
    carediscover: CareDiscoverApplicationForm,
  }[product];

  return (
    <Form t={t} history={history} />
  );
}
