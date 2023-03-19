import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiPeople = createApi({
  reducerPath: 'apiPeople',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/' }),
  endpoints: biuld => ({
    getPeople: biuld.query({
      query: end => `api/${end}`,
    }),
  }),
});

export const { useGetPeopleQuery } = apiPeople;
