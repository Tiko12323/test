import { createSlice } from '@reduxjs/toolkit'

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: [],
  reducers: {
    favoriteAdd(state, {payload}) {
      console.log(payload, "payload")
      state.push(payload)
    },
    favoriteDelete(state, {payload}){
      state = state.filter((item)=> item.id !== payload)
      return state
    }
    
  }
})

export const { favoriteAdd, favoriteDelete } = favoriteSlice.actions
export default favoriteSlice.reducer