import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase/firebase.init'

const Navbar = () => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  return (
    <div className='shadow-lg'>
      <div className='flex w-4/5 h-20 mx-auto justify-between items-center'>
        <div className=''>
          <Link to='/'>
            <h2 className='text-2xl'>logo</h2>
          </Link>
        </div>
        <div className='space-x-5'>
          <Link to='/'>Home</Link>
          {user ? (
            <button onClick={() => signOut(auth)}>logout</button>
          ) : (
            <Link to='/login'>Login</Link>
          )}
          <Link to='/'>Inventory</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
