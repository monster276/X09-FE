import axios from 'axios'
import {
  loginFailed,
  loginStart,
  loginSuccess,
  CreateStart,
  CreateSuccess,
  CreateFailed,
  logOutFailed,
  logOutStart,
  logOutSuccess,
} from './authSlice'
import {
  deleteUserFailed,
  deleteUsersSuccess,
  deleteUserStart,
  getUsersFailed,
  getUsersStart,
  getUsersSuccess,
} from './userSlice'
import { toast } from 'react-toastify'
export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart())
  try {
    const res = await axios.post(
      'https://x09-be.onrender.com/api/auth/login',
      user,
    )
    window.localStorage.setItem(
      'accesstoken',
      JSON.stringify(res.data.accessToken),
    )
    dispatch(loginSuccess(res.data))
    console.log(res.data)
    toast.success('Welcome back')
    if (res.data.isAdmin === true) {
      navigate('/admin')
    } else {
      navigate('/teacher')
    }
  } catch (error) {
    console.log(error.response.data)
    dispatch(loginFailed())
    toast.error(error.response.data)
  }
}
export const createUser = async (user, dispatch, navigate) => {
  dispatch(CreateStart())
  try {
    await axios.post('https://x09-be.onrender.com/api/auth/register', user)
    dispatch(CreateSuccess())
    navigate('/login')
  } catch (err) {
    console.log(err)
    dispatch(CreateFailed('Something is wrong'))
  }
}

export const getAllUsers = async (token, dispatch, axiosJWT) => {
  dispatch(getUsersStart())
  try {
    const res = await axiosJWT.get('https://x09-be.onrender.com/api/user/', {
      headers: { token: `Bearer ${token}` },
    })
    dispatch(getUsersSuccess(res.data))
    console.log(res.data.users)
  } catch (err) {
    dispatch(getUsersFailed())
  }
}

export const deleteUser = async (id, dispatch, token) => {
  console.log('delete')
  dispatch(deleteUserStart())
  try {
    console.log(id)
    const res = await axios.delete(
      'https://x09-be.onrender.com/api/user/' + id,
      {
        headers: { token: `Bearer ${token}` },
      },
    )
    dispatch(deleteUsersSuccess(res.data))
  } catch (err) {
    dispatch(deleteUserFailed(err.response.data))
  }
}

export const logOut = async (dispatch, navigate) => {
  dispatch(logOutStart())
  try {
    const res = await axios.post('https://x09-be.onrender.com/api/auth/logout')
    dispatch(logOutSuccess())

    navigate('/login')
  } catch (err) {
    dispatch(logOutFailed())
  }
}
