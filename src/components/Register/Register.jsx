import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useFirebase } from '../../hooks/useFirebase'
import { motion } from 'framer-motion'
import Spinner from '../Spinner/Spinner'

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  })
  const navigate = useNavigate()
  const { handleRegisterWithEmail, createLoading } = useFirebase()
  const [clicked, setClicked] = useState(false)

  const onSubmit = async (data) => {
    handleRegisterWithEmail(data, reset)
    setClicked(true)
  }

  return clicked && createLoading ? (
    <Spinner></Spinner>
  ) : (
    <motion.div
      className='min-h-[300px] md:w-3/5 lg:w-4/5 xl:w-3/5 mx-auto my-6 p-12'
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      exit={{ x: 300, opacity: 0 }}
    >
      <h2 className='text-center font-semibold text-2xl my-5 md:my-12'>
        Registration
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
          <label htmlFor='name'>Full name</label>
          <input
            id='name'
            className='p-3 border border-gray-400 focus:border-primary rounded-md outline-none'
            placeholder='John Doe'
            type='text'
            {...register('name', {
              required: 'name is required',
              maxLength: { value: 100, message: 'max length 100 character' },
            })}
            onBlur={() => trigger('name')}
          />
          {errors.name && (
            <p className='absolute text-red-600 -bottom-7'>
              {errors.name.message}
            </p>
          )}
        </div>
        <div className='flex flex-col gap-3 relative'>
          <label htmlFor='email'>Email address</label>
          <input
            id='email'
            className='p-3 border border-gray-400 focus:border-primary rounded-md outline-none'
            placeholder='John Doe@gmail.com'
            type='email'
            {...register('email', {
              required: 'email is required',
              maxLength: {
                value: 100,
                message: 'max length 100 character',
              },
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
            className='p-3 border border-gray-400 focus:border-primary rounded-md outline-none'
            placeholder='54731)!#@73$_CI4FJ#'
            type='password'
            {...register('password', {
              required: 'password is required',
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
        <div className='flex flex-col gap-3 relative'>
          <label htmlFor='confirmPassword'>Confirm password</label>
          <input
            id='confirmPassword'
            className='p-3 border border-gray-400 focus:border-primary rounded-md outline-none'
            placeholder='54731)!#@73$_CI4FJ#'
            type='password'
            {...register('confirmPassword', {
              required: 'confirm password is required',
              maxLength: 100,
            })}
            onBlur={() => trigger('confirmPassword')}
          />
          {errors.confirmPassword && (
            <p className='absolute text-red-600 -bottom-7'>
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <input
          className='bg-primary text-white p-3 cursor-pointer hover:bg-indigo-700 rounded-md'
          type='submit'
          value='register'
        />
      </form>
      <div>
        <p
          className='underline mt-4 cursor-pointer w-fit mx-auto text-primary select-none'
          onClick={() => navigate('/user/login')}
        >
          already have an account?
        </p>
      </div>
    </motion.div>
  )
}

export default Register
