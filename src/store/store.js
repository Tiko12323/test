import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import usersSlice from './usersSlice'
import productSlice from './productSlice'
import basketSlice from './basketSlice'
import favoriteSlice from './favoriteSlice'
import slideSlice from './slideSlice'
import productDetaleSlice from './productDetaleSlice'
import { categoryesApi } from '../services/categoryesApi'
import { headerApi } from '../services/headerApi'
import { homeApi } from '../services/homeApi'
import { productsApi } from '../services/productsApi'
import {favoritesApi} from '../services/favoritesApi'
import { basketApi } from '../services/basketApi'
import { productsDetaleApi } from '../services/productsDetaleApi'


export const store = configureStore({
  reducer: {
    users: usersSlice,
    product: productSlice,
    basket: basketSlice,
    favorite: favoriteSlice,
    slide: slideSlice,
    productDetale: productDetaleSlice,
    [categoryesApi.reducerPath]: categoryesApi.reducer,
    [headerApi.reducerPath]: headerApi.reducer,
    [homeApi.reducerPath]: homeApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
    [basketApi.reducerPath]: basketApi.reducer,
    [productsDetaleApi.reducerPath]: productsDetaleApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoryesApi.middleware,
      headerApi.middleware,
      homeApi.middleware,
      productsApi.middleware,
      favoritesApi.middleware,
      basketApi.middleware,
      productsDetaleApi.middleware
    ),
})

setupListeners(store.dispatch)
