import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    getChannelId: builder.query<string, string>({
      query: (username) => `/id/${username}`
    }),
    getSubscriberCount: builder.query<number, string>({
      query: (channelId) => `/statistics/${channelId}`,
      transformResponse: (response: string) => {
        if (!response) {
          return 0;
        }

        return parseInt(response);
      }
    })
  })
});

export const { useGetChannelIdQuery, useGetSubscriberCountQuery } = apiSlice;

export default apiSlice;
