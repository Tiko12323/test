import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../constants/api'

export const favoritesApi = createApi({
  reducerPath: 'favoritesApi',
  tagTypes: ['favorites'],
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getFavoritesByName: builder.query({
      query: () => '/favorites',
    }),
    addFavoritesByName: builder.mutation ({
        query: (body) => ({
            url: '/favorites',
            method: 'POST',
            body: JSON.stringify(body),
            headers: {"Content-type": "appliation/json"}
        }),
        invalidatesTags: ['favorites']
    }),
    deleteFavoritesByNam: builder.mutation ({
        query: (id)=> ({
            url: `/favorites/${id}`,
            method: 'DELETE',
            headers: {"Content-type": "appliation/json"}
        }),
        invalidatesTags: ['favorites']
    })
    })
})

export const { useGetFavoritesByNameQuery, useAddFavoritesByNameMutation, useDeleteFavoritesByNamMutation   } = favoritesApi