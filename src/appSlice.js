import { createSlice } from '@reduxjs/toolkit';

import locales from './locales.json';

const { actions, reducer } = createSlice({
  name: 'app',
  initialState: {
    t: {},
    locale: '',
    isNew: false,
  },
  reducers: {
    setLocale: (state, { payload: locale }) => ({
      ...state,
      t: locales[locale],
      locale,
    }),
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
