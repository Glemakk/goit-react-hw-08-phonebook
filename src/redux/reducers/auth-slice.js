import { createSlice } from '@reduxjs/toolkit'
import {
  register,
  logIn,
  logOut,
  refreshCurrentUser,
} from '../operations/auth-operations'

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchedCurrentUser: false,
  error: null,
  isLoading: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user
      state.token = action.payload.token
      state.isLoggedIn = true
      state.isLoading = false
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user
      state.token = action.payload.token
      state.isLoggedIn = true
      state.isLoading = false
    },
    [logOut.fulfilled](state, action) {
      state.user = { name: null, email: null }
      state.token = null
      state.isLoggedIn = false
    },
    [refreshCurrentUser.pending](state) {
      state.isFetchedCurrentUser = true
    },
    [refreshCurrentUser.fulfilled](state, action) {
      state.user = action.payload
      state.isLoggedIn = true
      state.isFetchedCurrentUser = false
    },
    [refreshCurrentUser.rejected](state) {
      state.isFetchedCurrentUser = false
    },
  },
})

export default authSlice.reducer
