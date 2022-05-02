import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useFirebase } from '../../hooks/useFirebase'
import { motion } from 'framer-motion'
import Spinner from '../Spinner/Spinner'

const Login = () => {
  const {
    handleSignInWithGoogle,
    handleResetPassword,
    handleLoginWithEmail,
    loginLoading,
  } = useFirebase()
  const { register, handleSubmit, reset } = useForm()
  const [resetForm, setResetForm] = useState(false)
  const [clicked, setClicked] = useState(false)

  const navigate = useNavigate()

  const onSubmit = async (data) => {
    handleLoginWithEmail(data, reset)
    setClicked(true)
  }

  const resetPass = (event) => {
    event.preventDefault()
    handleResetPassword(event.target.email.value)
    setResetForm(false)
  }

  return resetForm ? (
    <div className='min-h-[300px] w-4/5 sm:w-3/5 md:w-1/2 lg:w-1/3 2xl:w-1/4 mx-auto shadow-lg my-20 rounded-lg p-12 flex flex-col justify-center relative'>
      <button
        className='absolute right-5 top-5 rounded-full bg-brown-500 text-white w-8 h-8'
        onClick={() => setResetForm(false)}
      >
        X
      </button>
      <form onSubmit={resetPass}>
        <label htmlFor='email'>Recovery email</label>
        <input
          type='email'
          name='email'
          className='w-full p-3 mt-4'
          placeholder='enter email address'
        />
        <input
          type='submit'
          className='bg-brown-500 text-white px-5 py-2 mt-5 cursor-pointer'
          value='send'
        />
      </form>
    </div>
  ) : (
    <div>
      {loginLoading && clicked ? (
        <Spinner></Spinner>
      ) : (
        <motion.div
          className='min-h-[300px] w-4/5 sm:w-3/5 md:w-1/2 lg:w-1/3 2xl:w-1/4 mx-auto shadow-lg my-12 rounded-lg p-12'
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          exit={{ x: -300, opacity: 0 }}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='
          flex
          flex-col
          gap-7
        '
          >
            <div className='flex flex-col gap-3'>
              <label htmlFor='email'>Email address</label>
              <input
                id='email'
                className='
              bg-white p-3 text-brown-500'
                placeholder='enter email address'
                type='text'
                {...register('email', { required: true, maxLength: 100 })}
              />{' '}
            </div>
            <div className='flex flex-col gap-3'>
              <label htmlFor='password'>Password</label>
              <input
                id='password'
                className='
              bg-white p-3 text-brown-500'
                placeholder='enter password'
                type='password'
                {...register('password', { required: true, maxLength: 100 })}
              />{' '}
            </div>
            <p
              className='w-fit ml-auto cursor-pointer underline'
              onClick={() => setResetForm(true)}
            >
              forgot password
            </p>
            <input
              className='bg-brown-500 text-white p-3 cursor-pointer hover:bg-brown-400'
              type='submit'
              value='login'
            />
          </form>
          <div className='mt-12'>
            <button
              className='border border-brown-500 text-brown-900 p-3 cursor-pointer hover:bg-brown-500 hover:text-white w-full transition-colors'
              onClick={handleSignInWithGoogle}
            >
              Sign In With Google
            </button>
            <p
              className='underline mt-4 cursor-pointer w-fit mx-auto'
              onClick={() => navigate('/user/register')}
            >
              don't have account?
            </p>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default Login
