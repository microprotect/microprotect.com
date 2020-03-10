import { createSlice } from '@reduxjs/toolkit';

import locales from './locales.json';

const DEFAULT_LOCALE = 'en';

const { actions, reducer } = createSlice({
  name: 'app',
  initialState: {
    t: {},
    locale: '',
    tester: false,
    version: 2,
    menuOpen: false,
    applicationForm: {
      firstName: 'Bruce',
      lastName: 'Lee',
      birthDate: '2000-01-01',
      nationality: 'kr',
      country: 'kr',
      zipCode: '04055',
      region: '',
      city: 'Seoul',
      address1: 'HeyGround 403',
      address2: '',
      email: 'tester@example.com',
      phoneNumber: '01012345678',
      coverageBeginDate: '2020-03-01',
      coverageEndDate: '2020-03-31',
      countryBeforeTrip: 'South Korea',
      countryDestination: 'Germany',
      entryDate: '2020-03-01',
      reason: 'Tour',
      cardNumber: '1234567890',
    },
  },
  reducers: {
    setLocale(state, { payload: locale }) {
      const t = locales[locale];
      return {
        ...state,
        t: t || locales[DEFAULT_LOCALE],
        locale: t ? locale : DEFAULT_LOCALE,
      };
    },
    setTester: (state, { payload: tester }) => ({
      ...state,
      tester,
    }),
    setVersion: (state, { payload: version }) => ({
      ...state,
      version,
    }),
    openMenu: (state) => ({
      ...state,
      menuOpen: true,
    }),
    closeMenu: (state) => ({
      ...state,
      menuOpen: false,
    }),
    setApplicationField: (state, { payload: { key, value } }) => ({
      ...state,
      applicationForm: {
        ...state.applicationForm,
        [key]: value,
      },
    }),
  },
});

export const {
  setLocale,
  setTester,
  setVersion,
  openMenu,
  closeMenu,
  setApplicationField,
} = actions;

export default reducer;
