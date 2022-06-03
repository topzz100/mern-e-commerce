import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlice'
import productReducer from './features/product/productSlice'
// import cartReducer from './cartSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer
  },
})
