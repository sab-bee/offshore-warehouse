import React from 'react'
import { Outlet } from 'react-router-dom'

const User = () => {
  return (
    <div>
      <h2 className='text-3xl text-center'>user</h2>
      <Outlet></Outlet>
    </div>
  )
}

export default User
