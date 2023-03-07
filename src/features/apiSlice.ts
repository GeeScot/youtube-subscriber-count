import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    getChannelId: builder.query<string, string>({
      query: (username) => `/id/${username}`
    }),
    getStatistics: builder.query<string, string>({
      query: (channelId) => `/statistics/${channelId}`
    })
  })
});

export const { useGetChannelIdQuery, useGetStatisticsQuery } = apiSlice;

export default apiSlice;
