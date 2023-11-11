import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import githubUser from './githubUser';

export const store = configureStore({
  reducer: {
    githubUser
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: ['errors.error'],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;