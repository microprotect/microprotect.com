import {createSlice} from '@reduxjs/toolkit';

import locales from './locales';

const {actions, reducer} = createSlice({
    name: 'app',
    initialState: {
        t: {},
        locale: '',
    },
    reducers: {
        setLocale: (state, {payload: locale}) => ({
            ...state,
            t: locales[locale],
            locale,
        }),
    },
});

export const {
    setLocale,
} = actions;

export default reducer;
