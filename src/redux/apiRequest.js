import axios from 'axios'
import { loginFailed, loginStart, loginSuccess } from './authSlice'
import { toast } from 'react-toastify'
export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart())
  try {
    const res = await axios.post(
      'https://x09-be.onrender.com/api/auth/login',
      user,
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
