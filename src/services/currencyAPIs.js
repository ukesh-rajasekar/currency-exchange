import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const exchangeApi = createApi({
   reducerPath: 'exchangeApi',
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/',
   }),
   endpoints: (builder) => ({
      getExchangeRatesByCurrency: builder.query({
         query: (name) => `/${name}`,
      }),
   }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetExchangeRatesByCurrencyQuery } = exchangeApi;
