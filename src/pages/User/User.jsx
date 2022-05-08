import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'

const User = () => {
  return (
    <div className='grid lg:grid-cols-2 h-screen bg-white'>
      <div className=' bg-primary text-sky-white hidden lg:grid items-center'>
        <div className='w-2/3 mx-auto'>
          <h1 className='text-6xl font-bold'>
            <span className='bg-light text-primary px-2'>Offshore</span>{' '}
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
      <div className='overflow-x-hidden'>
        <div className='text-4xl relative top-10 left-10 text-primary'>
          <Link to='/'>
            <AiFillHome />
          </Link>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default User
