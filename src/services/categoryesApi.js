import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../constants/api'

export const categoryesApi = createApi({
  reducerPath: 'categoryesApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCategoryesByName: builder.query({
      query: () => '/categoryes',
    }),

    })
  
})

export const { useGetCategoryesByNameQuery  } = categoryesApi