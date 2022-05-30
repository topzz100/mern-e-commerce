import {createSlice} from '@reduxjs/toolkit'

const cartSlice=(createSlice({
  name: 'cart',
  initialState: {
    products: [],
    cartQuantity: 0,
    cartTotal: 0
  },
  reducers: {
    addToCart: (state, action) =>{
      state.products.push(action.payload);
      state.cartQuantity+=1;
    
    } ,
    addTotal: (state, action)=>{
      state.cartTotal += action.payload
    }
  }
}))

export const {addToCart, addTotal} = cartSlice.actions
export default cartSlice.reducer
export const selectCart = (state) => state.cart