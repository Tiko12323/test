import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../constants/api'

export const headerApi = createApi({
  reducerPath: 'headerApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getPagesByName: builder.query({
      query: () => '/pages',
    }),

    })
  
})

export const { useGetPagesByNameQuery  } = headerApi