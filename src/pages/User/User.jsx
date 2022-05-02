import React from 'react'
import { Outlet } from 'react-router-dom'
const User = () => {
  return (
    <div className='grid lg:grid-cols-2 h-screen bg-white'>
      <div className=' bg-primary text-sky-white hidden lg:grid items-center'>
        <div className='w-2/3 mx-auto'>
          <h1 className='text-6xl font-bold'>
            <span className='bg-sky-white text-primary px-2'>Offshore</span>{' '}
            warehouse management system
          </h1>
          <p className='w-4/5 mt-12'>
            one of the best warehouse management system available online.
            Providing best quality service for above two dacades, without any
            compromise. Our high qualiry storage provides the top notch
            protection to the liquor
          </p>
        </div>
      </div>
      <div className='overflow-hidden'>
        <div className='flex gap-2 justify-center mt-12'>
          <div className='w-5 h-5 rounded-full bg-sky-white cursor-pointer'></div>
          <div className='w-5 h-5 rounded-full bg-sky-white cursor-pointer'></div>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default User
