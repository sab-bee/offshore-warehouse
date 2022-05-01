import React from 'react'
import { Outlet } from 'react-router-dom'

const User = () => {
  return (
    <div className='mt-12'>
      <h2 className='text-3xl text-center'>User Account</h2>
      <Outlet></Outlet>
    </div>
  )
}

export default User
