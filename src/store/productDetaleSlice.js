import { createSlice } from '@reduxjs/toolkit'

const productDetaleSlice = createSlice({
  name: 'productDetale',
  initialState: [],
  reducers: {
    productDetaleSliceAdd(state, {payload}) {
      console.log(payload, 'state prodDet')
      state.push(payload)
    }
  }
})

export const { productDetaleSliceAdd } = productDetaleSlice.actions
export default productDetaleSlice.reducer