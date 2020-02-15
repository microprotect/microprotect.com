import reducer, {
  setLocale,
  setApplicationField,
} from './appSlice';

describe('reducer', () => {
  test('setLocale', () => {
    const initialState = {
      locale: 'en',
    };
    const state = reducer(initialState, setLocale('ko'));
    expect(state.locale)
      .toBe('ko');
  });

  test('setApplicationField', () => {
    const initialState = {
      applicationForm: {
        firstName: '',
      },
    };
    const state = reducer(
      initialState,
      setApplicationField({
        key: 'firstName',
        value: 'Bruce',
      }),
    );
    expect(state.applicationForm.firstName)
      .toBe('Bruce');
  });
});
