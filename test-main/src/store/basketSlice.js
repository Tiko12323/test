import { createSlice } from '@reduxjs/toolkit'

const basketSlice = createSlice({
  name: 'basket',
  initialState: [],
  reducers: {
    basketAdd(state, {payload}) {
      console.log(payload, "basket")
      state.push(payload)
    }
    
  }
})

export const { basketAdd } = basketSlice.actions
export default basketSlice.reducer