/* @jsx jsx */

import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { jsx } from '@emotion/core';

import axios from 'axios';

import TextField from '../TextField';
import RadioButton from '../RadioButton';

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

export default function ApplicationForm() {
  const [loading, setLoading] = useState(false);

  const { applicationForm } = useSelector((state) => ({
    applicationForm: state.applicationForm,
  }));

  const handleSubmit = (event) => {
    event.preventDefault();
    sendApplication(applicationForm, setLoading);
  };

  if (loading) {
    return (
      <div>
        Sending...
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <pre>
        {JSON.stringify(applicationForm, 'null', '\t')}
      </pre>
      <RadioButton
        name="sex"
        label="Sex"
        options={['Male', 'Female']}
      />
      <TextField name="firstName" label="First name" type="text" required />
      <TextField name="lastName" label="Last name" type="text" required />
      <TextField name="birthDate" label="Birth date" type="date" required />
      <TextField name="nationality" label="Nationality" type="text" required />
      <TextField name="country" label="Country" type="text" required />
      <TextField name="zipCode" label="ZIP code" type="text" required />
      <TextField name="region" label="Region" type="text" />
      <TextField name="city" label="City" type="text" required />
      <TextField name="address1" label="Address 1" type="text" required />
      <TextField name="address2" label="Address 2" type="text" />
      <TextField name="email" label="E-mail" type="email" required />
      <TextField name="phoneNumber" label="Phone number" type="tel" required />
      <RadioButton
        name="a"
        label="피보험자가 이전에 저희 보험에 가입한 적이 있나요?"
        options={['Yes', 'No']}
      />
      <RadioButton
        name="b"
        label="체류국가에서 보험이 시작되기 전에 피보험자는 건강보험에 가입되어 있었나요?"
        options={['Yes', 'No']}
      />
      <TextField name="coverageBeginDate" label="보험 개시" type="date" required />
      <TextField name="coverageEndDate" label="보험 만료" type="date" required />
      <TextField name="countryBeforeTrip" label="여행 출발 전 거주지" type="text" required />
      <TextField name="countryDestination" label="체류 국가" type="text" required />
      <TextField name="entryDate" label="입국/출국일" type="date" required />
      <TextField name="reason" label="여행 목적" type="text" required />
      <TextField name="cardNumber" label="Card number" type="text" required />
      <div>
        <button type="submit">
          Send application
        </button>
      </div>
    </form>
  );
}
