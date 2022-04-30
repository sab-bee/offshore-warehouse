import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useFirebase } from '../../hooks/useFirebase'

const Login = () => {
  const { handleSignInWithGoogle } = useFirebase()
  const { register, handleSubmit, reset } = useForm()
  const { handleLoginWithEmail } = useFirebase()

  const navigate = useNavigate()
  const onSubmit = async (data) => {
    handleLoginWithEmail(data, reset)
  }

  return (
    <div className='min-h-[300px] w-4/5 sm:w-3/5 md:w-1/2 lg:2-2/6 xl:w-1/3 mx-auto shadow-lg mt-12 rounded-lg p-12'>
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

        <input
          className='bg-brown-500 text-white p-3 cursor-pointer hover:bg-brown-400'
          type='submit'
          value='login'
        />
      </form>
      <div className='mt-12'>
        <button
          className='bg-brown-500 text-white p-3 cursor-pointer hover:bg-brown-400 w-full'
          onClick={handleSignInWithGoogle}
        >
          Sign In With Google
        </button>
        <p
          className='underline mt-4 text-center cursor-pointer'
          onClick={() => navigate('/user/register')}
        >
          don't have account?
        </p>
      </div>
    </div>
  )
}

export default Login
