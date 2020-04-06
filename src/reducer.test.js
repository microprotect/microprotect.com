import reducer, {
  setLocale,
  setTester,
} from './appSlice';

describe('reducer', () => {
  test('setLocale', () => {
    const initialState = {
      locale: 'en',
    };
    const state = reducer(initialState, setLocale('ko'));
    expect(state.locale).toBe('ko');
  });

  test('setTester', () => {
    const initialState = {
      tester: false,
    };
    const state = reducer(initialState, setTester(true));
    expect(state.tester).toBeTruthy();
  });
});
