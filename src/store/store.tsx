import { configureStore } from '@reduxjs/toolkit';
import { apiPeople } from '../api/api.people/api.people';

export const store = configureStore({
  reducer: {
    [apiPeople.reducerPath]: apiPeople.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiPeople.middleware),
});
