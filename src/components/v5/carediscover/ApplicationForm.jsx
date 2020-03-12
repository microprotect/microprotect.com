/* @jsx jsx */

import React, { useState } from 'react';

import { jsx } from '@emotion/core';

import ApplicationNavigator from './ApplicationNavigator';
import ApplicationSteps from './ApplicationSteps';
import ApplicationFieldSet1 from './ApplicationFieldSet1';
import ApplicationFieldSet2 from './ApplicationFieldSet2';
import ApplicationFieldSet3 from './ApplicationFieldSet3';

export default function ApplicationForm({ t, history }) {
  const [step, setStep] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: submit form data
  };

  const handleNextButtonClick = (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
    setStep(step + 1);
  };

  const FieldSet = [
    ApplicationFieldSet1, ApplicationFieldSet2, ApplicationFieldSet3,
  ][step];

  return (
    <form onSubmit={handleSubmit}>
      <ApplicationNavigator
        step={step}
        setStep={setStep}
        history={history}
      />
      <ApplicationSteps step={step} />
      <FieldSet t={t} onNextButtonClick={handleNextButtonClick} />
    </form>
  );
}
