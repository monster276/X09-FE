import React, { useState } from 'react'
import loginImg from '../images/dev4.jpg'
import ava from '../images/avatar.svg'
import Loading from '../components/loading/Loading'
import {
  UserOutlined,
  LockOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
} from '@ant-design/icons'
import { useEffect } from 'react'
import { set, useForm } from 'react-hook-form'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import { loginUser } from '../redux/apiRequest'
import { useDispatch } from 'react-redux'
import Button from '../components/button/Button'

const schema = yup.object({
  username: yup.string().required('Tên đăng nhập không được để trống'),
  password: yup.string().required('Mật khẩu không được để trống'),
})

const Login = () => {
  const [togglePassword, setTogglePassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  })
  useEffect(() => {
    document.title = 'Login Page'
    console.log('hello')
    const arrErroes = Object.values(errors)
    console.log(arrErroes.length)
    if (arrErroes.length > 0) {
      setLoading(false)
      toast.error(arrErroes[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      })
    }
  }, [errors])
  const handleSignIn = (values) => {
    if (!isValid) {
      return
    }
    setLoading(true)
    console.log(values)
    const newUser = {
      username: values.username,
      password: values.password,
    }
    loginUser(newUser, dispatch, navigate)
    
  }

  return (
    <div className="flex sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img
          className="w- h-screen flex-1 object-cover "
          src={loginImg}
          alt=""
        />
      </div>

      <div className="bg-gray-800 flex flex-col justify-center flex-1">
        <form
          className="max-w-[400px] h-[500px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8 justify-center flex flex-col mt-2 pt-0"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <div className="flex justify-center">
            <img className="max-w-[70px] mb-5" src={ava} alt="" />
          </div>
          <h3 className="text-4xl dark:text-white font-bold text-center mb-10 mt-2">
            XIN CHÀO
          </h3>
          <div className="flex flex-col text-gray-400 py-2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Tên đăng nhập
            </label>
            <div className="input">
              <UserOutlined className="absolute mt-5 mr-5 ml-4"></UserOutlined>
              <input
                {...register('username')}
                type="username"
                name="username"
                id="username"
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none w-full pl-10"
                placeholder="Nhập tên đăng nhập"
              />
            </div>
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Mật khẩu
            </label>
            <div className="input flex">
              <LockOutlined className=" z-10 absolute mt-5 ml-4"></LockOutlined>
              <input
                {...register('password')}
                type={togglePassword ? 'text' : 'password'}
                name="password"
                id="password"
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none w-full pl-10"
                placeholder="Nhập mật khẩu"
                control={control}
              />
              {!togglePassword ? (
                <EyeInvisibleOutlined
                  onClick={() => setTogglePassword(true)}
                  className="mt-5 ml-72 absolute"
                ></EyeInvisibleOutlined>
              ) : (
                <EyeOutlined
                  onClick={() => setTogglePassword(false)}
                  className="mt-5 ml-72 absolute"
                ></EyeOutlined>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full my-5 py-2 bg-orange-400 shadow-lg shadow-orange-400/50 hover:shadow-orange-400/40 text-white font-semibold rounded-lg"
            onClick={() => setLoading(true)}
            style={{ height: '50px' }}
          >
            {loading ? <Loading></Loading> : 'ĐĂNG NHẬP'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
