import { signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase/firebase.init'
import { ActiveLink } from '../ActiveLink.ActiveLink'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  const [expand, setExpand] = useState(false)

  return (
    <>
      <motion.div
        className='shadow-lg bg-accent-brown hidden md:block'
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
      >
        <div className='flex w-4/5 h-20 mx-auto justify-between items-center'>
          <div className=''>
            <ActiveLink to='/'>
              <h2 className='text-xl'>
                <span>offshore</span>
                <br />
                <span>sotckroom</span>
              </h2>
            </ActiveLink>
          </div>
          <div className='space-x-5'>
            <ActiveLink to='/'>Home</ActiveLink>
            {user ? (
              <>
                <ActiveLink to='/manageInventories'>Inventory</ActiveLink>
                <ActiveLink to='/addProduct'>Add Liquor</ActiveLink>
                <ActiveLink to='/myLiquors'>My Liquors</ActiveLink>
                <button onClick={() => signOut(auth)}>logout</button>
              </>
            ) : (
              <ActiveLink to='/user/login'>Login</ActiveLink>
            )}
          </div>
        </div>
      </motion.div>
      <motion.div className='md:hidden bg-accent-brown shadow-lg'>
        <div className='flex mx-auto min-h-[80px] justify-between items-center px-6'>
          <div>
            <ActiveLink to='/'>
              <h2 className='text-xl'>
                <span>offshore</span>
                <br />
                <span>sotckroom</span>
              </h2>
            </ActiveLink>
          </div>
          <div>
            <button onClick={() => setExpand(!expand)}>extend</button>
          </div>
        </div>
        {expand && (
          <div className='flex flex-col items-center'>
            <ActiveLink to='/'>Home</ActiveLink>

            {user ? (
              <>
                <ActiveLink to='/manageInventories'>Inventory</ActiveLink>
                <ActiveLink to='/addProduct'>Add Liquor</ActiveLink>
                <ActiveLink to='/myLiquors'>My Liquors</ActiveLink>
                <button onClick={() => signOut(auth)}>logout</button>
              </>
            ) : (
              <ActiveLink to='/user/login'>Login</ActiveLink>
            )}
          </div>
        )}
      </motion.div>
    </>
  )
}

export default Navbar

//https://i.ibb.co/PY6Q03X/Odd-Bins.png
// https://i.ibb.co/17MBSzF/Odd-Bins-banner.png
