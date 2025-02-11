import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../constants/api'

export const basketApi = createApi({
  reducerPath: 'basketApi',
  tagTypes: ['basket'],
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getBasketByName: builder.query({
      query: () => '/basket',
    }),
    addBasketByName: builder.mutation({
        query: (body) => ({
            url: '/basket',
            method: 'POST',
            body: JSON.stringify(body),
            headers: {"Content-type": "appliation/json"}
        }),
        invalidatesTags: ['basket']
    })
    })
})

export const { useGetBasketByNameQuery, useAddBasketByNameMutation  } = basketApi