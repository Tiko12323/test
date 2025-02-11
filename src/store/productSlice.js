import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'product',
  initialState: [
    {id: 1, title: 'nisan', price: '2000$', manufacturer: 'Germany',count: 2 ,power: '300',engineType: 'petrol',year: 2014,img: 'https://www.topgear.com/sites/default/files/2024/07/Nissan%20Qashqai%20N-Design_012-source.jpg', discountVisibal: true, isFavorite: false},
    {id:2 ,title: 'mercedes', price: '5000$', manufacturer: 'England',count: 4 ,power: '240',engineType: 'gas',year: 2016, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/2018_Mercedes-Benz_A200_AMG_Line_Premium%2B_1.3_Front.jpg/1200px-2018_Mercedes-Benz_A200_AMG_Line_Premium%2B_1.3_Front.jpg', discountVisibal: false, isFavorite: false},
    {id:3, title: 'bmw', price: '4000$', manufacturer: 'Russian',count: 7 ,power: '350',engineType: 'energy',year: 2018, img: 'https://www.bmw.am/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-04.jpg', discountVisibal: true, isFavorite: false},
    {id:4, title: 'mazda', price: '3000$', manufacturer: 'Chines',count: 9 ,power: '150',engineType: 'petrol',year: 2020, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJXK5qE4E9A_qBJhQVVjnp9af0o4lXq6Owfw&s', discountVisibal: false, isFavorite: false}
  ],
  reducers: {
    usersAdd(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      })
    },
    productsFavorite(state, {payload}){
      state = state.map((item)=>{
        if(item.id === payload.id){
          item.isFavorite = !item.isFavorite
        }
        return state
      })
    }
    }
  }
)

export const { usersAdd, productsFavorite } = productSlice.actions
export default productSlice.reducer