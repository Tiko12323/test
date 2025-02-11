import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../constants/api'

export const productsDetaleApi = createApi({
  reducerPath: 'productsDetaleApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getProductsDetaleByName: builder.query({
      query: (id) => `/products/${id}`,
    })
   
  }),
})

export const { useGetProductsDetaleByNameQuery } = productsDetaleApi