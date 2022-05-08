import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className='min-h-screen grid items-center'>
      <div className='bg-blue-700 w-4/5 lg:w-2/5 mx-auto min-h-[300px] p-12 text-white'>
        <h2 className='font-semibold text-2xl'>Page Not Found</h2>
        <p className='text-lg mt-4'>
          The page your are trying to access is not available or either its
          under constuction!
        </p>
        <h2 className='text-[6rem] font-bold text-center mt-6'>404</h2>
        <div className='text-center md:text-left'>
          <button
            className='bg-light text-primary p-4 font-medium hover:bg-slate-100'
            onClick={() => navigate('/')}
          >
            plsease go back to home
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
