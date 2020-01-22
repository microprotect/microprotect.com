import { createSlice } from '@reduxjs/toolkit';

import locales from './locales.json';

const DEFAULT_LOCALE = 'en';

const { actions, reducer } = createSlice({
  name: 'app',
  initialState: {
    t: {},
    locale: '',
    version: 2,
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
  },
});

export const {
  setLocale,
  setVersion,
  openMenu,
  closeMenu,
} = actions;

export default reducer;
