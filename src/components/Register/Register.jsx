import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useFirebase } from '../../hooks/useFirebase'
import { motion } from 'framer-motion'

const Register = () => {
  const { register, handleSubmit, reset } = useForm()
  const navigate = useNavigate()

  const { handleRegisterWithEmail } = useFirebase()
  const onSubmit = async (data) => {
    handleRegisterWithEmail(data, reset)
  }
  return (
    <motion.div
      className='min-h-[300px] w-4/5 sm:w-3/5 md:w-1/2 lg:w-1/3 2xl:w-1/4 mx-auto shadow-lg my-12 rounded-lg p-12'
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      exit={{ x: 300, opacity: 0 }}
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
          <label htmlFor='name'>Full name</label>
          <input
            id='name'
            className='
            bg-white p-3 text-brown-500'
            placeholder='John Doe'
            type='text'
            {...register('name', { required: true, maxLength: 100 })}
          />{' '}
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor='email'>Email address</label>
          <input
            id='email'
            className='
            bg-white p-3 text-brown-500'
            placeholder='John Doe@gmail.com'
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
            placeholder='54731)!#@73$_CI4FJ#'
            type='password'
            {...register('password', { required: true, maxLength: 100 })}
          />{' '}
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor='confirmPassword'>Confirm password</label>
          <input
            id='confirmPassword'
            className='
            bg-white p-3 text-brown-500'
            placeholder='54731)!#@73$_CI4FJ#'
            type='password'
            {...register('confirmPassword', { required: true, maxLength: 100 })}
          />{' '}
        </div>

        <input
          className='bg-brown-500 text-white p-3 cursor-pointer hover:bg-brown-400'
          type='submit'
          value='register'
        />
      </form>
      <div>
        <p
          className='underline mt-4 cursor-pointer w-fit mx-auto'
          onClick={() => navigate('/user/login')}
        >
          already have an account?
        </p>
      </div>
    </motion.div>
  )
}

export default Register
