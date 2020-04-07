import { createSlice } from '@reduxjs/toolkit';

import locales from './locales.json';

const DEFAULT_LOCALE = 'en';

const { actions, reducer } = createSlice({
  name: 'app',
  initialState: {
    t: {},
    locale: '',
    tester: false,
    menuOpen: false,
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
    openMenu: (state) => ({
      ...state,
      menuOpen: true,
    }),
    closeMenu: (state) => ({
      ...state,
      menuOpen: false,
    }),
  },
});

export const {
  setLocale,
  setTester,
  openMenu,
  closeMenu,
  setApplicationField,
} = actions;

export default reducer;
