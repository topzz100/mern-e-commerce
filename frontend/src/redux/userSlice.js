// import { Satellite } from '@mui/icons-material'
import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false
  },
  reducers:{
    loginStart : (state, action)=> {
      state.isFetching = true
    }, 
    loginSuccess: (state, action) => {
      state.currentUser = action.payload,
      state.isFetching = true
    },
    loginFail : (state) => {
      state.error = true
      state.isFetching = false
    }
  }
})
export const {loginStart, loginSuccess, loginFail} = userSlice.actions
export default userSlice.reducer