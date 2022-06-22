import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  quantity: 0,
  total: 0
};

export const userSlice = createSlice({
  name: 'cart',
  initialState,
  
  reducers: {
    addToCart: (state, action) => {
      state.products.push(action.payload.cartProduct);
      state.quantity += 1;
      state.total += action.payload.cartProduct.price * action.payload.cartProduct.quantity;
    },
    updateCart:(state, action) =>{
      state.products = action.payload.cartProducts
      state.quantity = action.payload.cartProducts.length
      state.total = action.payload.cartProducts.reduce((total, p)=>
        total + p.price*p.quantity
      , 0)
    },
    reset: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  }
});

export const { addToCart, reset, updateCart } = userSlice.actions;



export default userSlice.reducer;