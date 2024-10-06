import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './initializeUser';
import { loginApi } from './service/loginQuery';

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userSlice.reducer,
      [loginApi.reducerPath]: loginApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(loginApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
