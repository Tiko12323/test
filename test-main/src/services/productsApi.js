import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../constants/api'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  tagTypes: ['products'],
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getProductsByName: builder.query({
      query: () => '/products',
    }),
    editProductsByName: builder.mutation({
      query: (body) => ({
        url: `/products/${body.id}`,
        method: 'PUT',
        headers: {"Content-type": "appliation/json"},
        body: JSON.stringify(body)
      }),
      invalidatesTags: ['products']
    })

    })
  
})

export const { useGetProductsByNameQuery, useEditProductsByNameMutation   } = productsApi