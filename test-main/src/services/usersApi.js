import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../constants/api'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getUsersByName: builder.query({
      query: () => '/products',
    }),
    addUsersByName: builder.mutation({
        query: ()=>{
            
        }
    })
  }),
})

export const { useGetUsersByNameQuery, useAddUsersByNameMutation } = usersApi