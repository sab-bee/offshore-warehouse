import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useFirebase } from '../../hooks/useFirebase'
import { AnimatePresence, motion } from 'framer-motion'
import Spinner from '../Spinner/Spinner'
import google from '../../assets/icon/google.svg'

const Login = () => {
  const {
    handleSignInWithGoogle,
    handleResetPassword,
    handleLoginWithEmail,
    loginLoading,
  } = useFirebase()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    trigger,
  } = useForm({
    mode: 'onChange',
  })
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

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {resetForm && (
          <motion.div
            className='w-full h-screen bg-[rgba(0,0,0,0.45)] fixed top-0 z-10'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              key='modal'
              className='absolute m-auto left-0 right-0 top-0 bottom-0 lg:right-1/2 h-64 w-[450px] rounded bg-white px-6'
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              exit={{ scale: 0.3, opacity: 0 }}
            >
              <button
                className='absolute right-5 top-5 rounded-full bg-primary text-white w-8 h-8'
                onClick={() => setResetForm(false)}
              >
                X
              </button>

              <form onSubmit={resetPass}>
                <div className='mt-12'>
                  <label htmlFor='email'>
                    <span className='font-medium'>Recovery email</span>
                  </label>
                  <input
                    type='email'
                    name='email'
                    className='w-full p-3 mt-4 border-b border-primary outline-none'
                    placeholder='enter email address'
                  />
                  <input
                    type='submit'
                    className='bg-primary text-white px-5 py-2 mt-8 cursor-pointer'
                    value='send'
                  />
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className=''>
        {loginLoading && clicked ? (
          <Spinner></Spinner>
        ) : (
          <motion.div
            className='md:w-3/5 lg:w-4/5 xl:w-3/5 mx-auto my-6 p-12'
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            exit={{ x: -300, opacity: 0 }}
          >
            <h2 className='text-center font-semibold text-2xl my-5 md:my-12'>
              Welcome Back
            </h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className='
          flex
          flex-col
          gap-10
        '
            >
              <div className='flex flex-col gap-3 relative'>
                <label htmlFor='email'>Email address</label>
                <input
                  id='email'
                  className='border border-gray-400
              p-3 focus:border-primary outline-none rounded-md'
                  placeholder='enter email address'
                  type='text'
                  {...register('email', {
                    required: 'email required',
                    maxLength: 100,
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'invalid email',
                    },
                  })}
                  onBlur={() => trigger('email')}
                />
                {errors.email && (
                  <p className='absolute text-red-600 -bottom-7'>
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className='flex flex-col gap-3 relative'>
                <label htmlFor='password'>Password</label>
                <input
                  id='password'
                  className='border border-gray-400
                  p-3 focus:border-primary outline-none rounded-md'
                  placeholder='enter password'
                  type='password'
                  {...register('password', {
                    required: 'password required',
                    maxLength: 100,
                  })}
                  onBlur={() => trigger('password')}
                />
                {errors.password && (
                  <p className='absolute text-red-600 -bottom-7'>
                    {errors.password.message}
                  </p>
                )}
              </div>
              <p
                className='w-fit ml-auto cursor-pointer text-primary underline select-none'
                onClick={() => setResetForm(true)}
              >
                forgot password
              </p>
              <input
                className='bg-primary rounded-md text-white p-3 cursor-pointer hover:bg-indigo-700'
                type='submit'
                value='login'
              />
            </form>

            <div className=''>
              <p className='mt-6 flex items-center justify-center gap-4 before:content-[""] before:sm:w-1/5  before:h-[1px] before:block before:bg-primary after:content-[""] after:sm:w-1/5 after:h-[1px] after:block after:bg-primary '>
                or signin with social account
              </p>
            </div>
            <div className='mt-6'>
              <button
                className='border border-gray-400 p-2 cursor-pointer hover:bg-sky-white hover:border-transparent w-full transition-colors flex items-center justify-center gap-x-2 rounded-md'
                onClick={handleSignInWithGoogle}
              >
                <img src={google} alt='' />
                Sign In With Google
              </button>
              <p
                className='underline text-primary mt-4 cursor-pointer w-fit mx-auto select-none'
                onClick={() => navigate('/user/register')}
              >
                don't have account?
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </>
  )
}

export default Login
