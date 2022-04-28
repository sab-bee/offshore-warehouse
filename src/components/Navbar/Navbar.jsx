import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='shadow-lg'>
      <div className='flex w-4/5 h-20 mx-auto justify-between items-center'>
        <div className=''>
          <h2 className='text-2xl'>logo</h2>
        </div>
        <div className='space-x-5'>
          <Link to='/'>Home</Link>
          <Link to='/'>Login</Link>
          <Link to='/'>Inventory</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
