import { signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase/firebase.init'
import { ActiveLink } from '../ActiveLink/ActiveLink'
import { motion } from 'framer-motion'
import logo from '../../assets/icon/logo.svg'
import { FaAlignJustify } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'

const Navbar = () => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  const [expand, setExpand] = useState(false)
  const { pathname } = useLocation()
  const paths = ['login', 'register']

  return (
    !paths.some((path) => pathname.includes(path)) && (
      <>
        <motion.div
          className='shadow-lg bg-primary hidden md:block sticky top-0 z-50 select-none text-white'
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
        >
          <div className='flex w-4/5 h-20 mx-auto justify-between items-center'>
            <div className=''>
              <ActiveLink to='/'>
                <img src={logo} alt='' />
                <p className='font-medium'>offshore</p>
              </ActiveLink>
            </div>
            <div className='lg:space-x-16 space-x-6'>
              <ActiveLink to='/'>Home</ActiveLink>
              {user ? (
                <>
                  <ActiveLink to='/manageInventories'>
                    Manage Inventory
                  </ActiveLink>
                  <ActiveLink to='/addProduct'>Add Liquor</ActiveLink>
                  <ActiveLink to='/myLiquors'>My Liquors</ActiveLink>
                  <button
                    onClick={() => {
                      signOut(auth)
                      navigate('/user/login')
                    }}
                  >
                    logout
                  </button>
                </>
              ) : (
                <ActiveLink to='/user/login'>Login</ActiveLink>
              )}
            </div>
          </div>
        </motion.div>
        <motion.div className='md:hidden bg-primary shadow-lg sticky top-0 z-50 select-none text-white'>
          <div className='flex mx-auto min-h-[80px] justify-between items-center px-6'>
            <div>
              <ActiveLink to='/'>
                <img src={logo} alt='' />
              </ActiveLink>
            </div>
            <div>
              <button onClick={() => setExpand(!expand)}>
                {expand ? <GrClose /> : <FaAlignJustify />}
              </button>
            </div>
          </div>
          {expand && (
            <motion.div
              className='flex flex-col items-center p-6'
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <ActiveLink to='/'>Home</ActiveLink>

              {user ? (
                <>
                  <ActiveLink to='/manageInventories'>
                    Manage Inventory
                  </ActiveLink>
                  <ActiveLink to='/addProduct'>Add Liquor</ActiveLink>
                  <ActiveLink to='/myLiquors'>My Liquors</ActiveLink>
                  <button
                    onClick={() => {
                      signOut(auth)
                      navigate('/user/login')
                    }}
                  >
                    logout
                  </button>
                </>
              ) : (
                <ActiveLink to='/user/login'>Login</ActiveLink>
              )}
            </motion.div>
          )}
        </motion.div>
      </>
    )
  )
}

export default Navbar

//https://i.ibb.co/PY6Q03X/Odd-Bins.png
// https://i.ibb.co/17MBSzF/Odd-Bins-banner.png
