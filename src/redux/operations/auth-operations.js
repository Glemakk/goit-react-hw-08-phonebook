import axios from 'axios'

import { createAsyncThunk } from '@reduxjs/toolkit'

import { toast } from 'react-toastify'

import { signUpUser, logInUser, logOutUser } from '../../services/auth-api'

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common.Authorization = ''
  },
}

export const register = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const user = await signUpUser(userData)
      token.set(user.token)
      return user
    } catch (error) {
      toast.error(`${error.message}`)
      return rejectWithValue(error.message)
    }
  },
)

export const logIn = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const user = await logInUser(userData)
      token.set(user.token)
      //   toast.success(`Welcome back ${name}`, {
      //     transition: Zoom,
      //   })
      return user
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      logOutUser()
      token.unset()
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

export const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState()
    const persistedToken = state.auth.token

    if (persistedToken === null) {
      console.log('Токена нет, уходим из refreshCurrentUser')
      return thunkAPI.rejectWithValue()
    }

    token.set(persistedToken)
    try {
      const { data } = await axios.get('/users/current')
      return data
    } catch (error) {
      toast.error(`${error.message}`)
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

const authOperations = {
  register,
  logIn,
  logOut,
  refreshCurrentUser,
}

export default authOperations
