import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase/firebase.init'

const Navbar = () => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  return (
    <div className='shadow-lg bg-accent-brown'>
      <div className='flex w-4/5 h-20 mx-auto justify-between items-center'>
        <div className=''>
          <Link to='/'>
            <h2 className='text-2xl'>logo</h2>
          </Link>
        </div>
        <div className='space-x-5'>
          <Link to='/'>Home</Link>
          {user ? (
            <>
              <Link to='/manageInventories'>Inventory</Link>
              <Link to='/addProduct'>Add Liquor</Link>
              <Link to='/myProducts'>My Liquors</Link>
              <button onClick={() => signOut(auth)}>logout</button>
            </>
          ) : (
            <Link to='/login'>Login</Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar

//https://i.ibb.co/PY6Q03X/Odd-Bins.png
// https://i.ibb.co/17MBSzF/Odd-Bins-banner.png
