import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import productService from './productService'

const initialState = {
  products : [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message:''
}
// export const getProducts = createAsyncThunk(
//   'prducts/all',
//   async (cat, thunkAPI) => {
//     try {
//       return await productService.getProducts(cat)
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       return thunkAPI.rejectWithValue(message)
//     }
//   }
// )
export const getProducts = createAsyncThunk(
  'prducts/all',
  async (cat, thunkAPI) => {
    try {
      return await productService.getProducts(cat)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
   reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.products = [...action.payload]
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
     
  },
})

export const { reset } = productSlice.actions
export default productSlice.reducer
