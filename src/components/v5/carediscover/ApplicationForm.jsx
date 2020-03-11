/* @jsx jsx */

import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { jsx } from '@emotion/core';

import axios from 'axios';

import ApplicationNavigator from './ApplicationNavigator';
import ApplicationSteps from './ApplicationSteps';
import ApplicationFieldSet1 from './ApplicationFieldSet1';
import ApplicationFieldSet2 from './ApplicationFieldSet2';
import ApplicationFieldSet3 from './ApplicationFieldSet3';

const { error } = console;

async function sendApplication(form, setLoading) {
  setLoading(true);

  const URL = 'http://berlin.test/care-discover/applications';

  try {
    await axios.post(URL, form);
  } catch (e) {
    error(e);
    setLoading(false);
  }
}

export default function ApplicationForm({ t, history }) {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);

  const { applicationForm } = useSelector((state) => ({
    applicationForm: state.applicationForm,
  }));

  const handleSubmit = (event) => {
    event.preventDefault();
    sendApplication(applicationForm, setLoading);
  };

  const handleNextButtonClick = (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
    setStep(step + 1);
  };

  if (loading) {
    return (
      <div>
        Sending...
      </div>
    );
  }

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
