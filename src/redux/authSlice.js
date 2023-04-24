import { createSlice } from '@reduxjs/toolkit'
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    login: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false
      state.login.currentUser = action.payload
      state.login.error = false
    },
    loginFailed: (state) => {
      state.login.isFetching = false
      state.login.error = true
    },
    CreateStart: (state) => {
      state.register.isFetching = true
    },
    CreateSuccess: (state) => {
      state.register.isFetching = false
      state.register.error = false
      state.register.success = true
    },
    CreateFailed: (state) => {
      state.register.isFetching = false
      state.register.error = true
      state.register.success = false
    },
    logOutSuccess: (state) => {
      state.login.isFetching = false
      state.login.currentUser = null
      state.login.error = false
    },
    logOutFailed: (state) => {
      state.login.isFetching = false
      state.login.error = true
    },
    logOutStart: (state) => {
      state.login.isFetching = true
    },
  },
})
export const {
  loginStart,
  loginFailed,
  loginSuccess,
  CreateStart,
  CreateSuccess,
  CreateFailed,
  logOutFailed,
  logOutStart,
  logOutSuccess,
} = authSlice.actions
export default authSlice.reducer
