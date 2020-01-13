import { createSlice } from '@reduxjs/toolkit';

import locales from './locales.json';

const DEFAULT_LOCALE = 'en';

const { actions, reducer } = createSlice({
  name: 'app',
  initialState: {
    t: {},
    locale: '',
    isNew: false,
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
    setNew: (state, { payload: isNew }) => ({
      ...state,
      isNew,
    }),
  },
});

export const {
  setLocale,
  setNew,
} = actions;

export default reducer;
