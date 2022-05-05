import { signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase/firebase.init'
import { ActiveLink } from '../ActiveLink/ActiveLink'
import { motion } from 'framer-motion'
import { async } from '@firebase/util'

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
          className=' bg-slate-50 hidden lg:block sticky top-0 z-50 select-none text-slate-700 border-b border-gray-300'
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
        >
          <div className='flex w-[90%] xl:w-4/5 h-20 mx-auto justify-between items-center'>
            <div className=''>
              <ActiveLink to='/'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2 21V7L12 3L22 7V21H16V13H8V21H2ZM9 21V19H11V21H9ZM11 18V16H13V18H11ZM13 21V19H15V21H13Z'
                    fill='#0011ff'
                  />
                </svg>

                <p className='font-medium'>offshore</p>
              </ActiveLink>
            </div>
            <div className='lg:space-x-10 font-medium'>
              <ActiveLink to='/'>Home</ActiveLink>
              <ActiveLink to='/about'>About</ActiveLink>
              <ActiveLink to='/blogs'>Blogs</ActiveLink>
              {user ? (
                <>
                  <ActiveLink to='/manageInventories'>
                    Manage Inventory
                  </ActiveLink>
                  <ActiveLink to='/addProduct'>Add Liquor</ActiveLink>
                  <ActiveLink to='/myLiquors'>My Liquors</ActiveLink>

                  <button
                    className='bg-primary hover:bg-indigo-700 p-2 text-white rounded-md'
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
        <motion.div className='lg:hidden bg-primary shadow-lg sticky top-0 z-50 select-none text-white'>
          <div className='flex mx-auto min-h-[80px] justify-between items-center px-6'>
            <div>
              <ActiveLink to='/'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2 21V7L12 3L22 7V21H16V13H8V21H2ZM9 21V19H11V21H9ZM11 18V16H13V18H11ZM13 21V19H15V21H13Z'
                    fill='white'
                  />
                </svg>
              </ActiveLink>
            </div>
            <div>
              <button onClick={() => setExpand(!expand)}>
                {expand ? (
                  <svg
                    width='19'
                    height='23'
                    viewBox='0 0 19 23'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect
                      className='transition-all'
                      x='1.69702'
                      y='5.23187'
                      width='22.4'
                      height='2.4'
                      rx='1'
                      transform='rotate(45 1.69702 5.23187)'
                      fill='white'
                    />
                    <rect
                      className='transition-all'
                      x='1.69702'
                      y='5.23187'
                      width='22.4'
                      height='2.4'
                      rx='1'
                      transform='rotate(45 1.69702 5.23187)'
                      fill='white'
                    />
                    <rect
                      className='transition-all'
                      x='18.3047'
                      y='1.69705'
                      width='22.4'
                      height='2.4'
                      rx='1'
                      transform='rotate(135 18.3047 1.69705)'
                      fill='white'
                    />
                    <rect
                      className='transition-all'
                      x='18.3047'
                      y='1.69705'
                      width='22.4'
                      height='2.4'
                      rx='1'
                      transform='rotate(135 18.3047 1.69705)'
                      fill='white'
                    />
                  </svg>
                ) : (
                  <svg
                    className='group'
                    width='28'
                    height='16'
                    viewBox='0 0 28 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect
                      className='transition-all'
                      x='0.800049'
                      y='0.399994'
                      width='15.2'
                      height='2.4'
                      rx='1'
                      fill='white'
                    />
                    <rect
                      className='transition-all'
                      x='0.800049'
                      y='0.399994'
                      width='15.2'
                      height='2.4'
                      rx='1'
                      fill='white'
                    />
                    <rect
                      className='transition-all'
                      x='0.800049'
                      y='6.79999'
                      width='27.2'
                      height='2.4'
                      rx='1'
                      fill='white'
                    />
                    <rect
                      className='transition-all'
                      x='0.800049'
                      y='6.79999'
                      width='27.2'
                      height='2.4'
                      rx='1'
                      fill='white'
                    />
                    <rect
                      className='transition-all'
                      x='7.800049'
                      y='13.2'
                      width='18.2'
                      height='2.4'
                      rx='1'
                      fill='white'
                    />
                    <rect
                      className='transition-all'
                      x='7.800049'
                      y='13.2'
                      width='18.2'
                      height='2.4'
                      rx='1'
                      fill='white'
                    />
                  </svg>
                )}
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
              <ActiveLink to='/blogs'>Blogs</ActiveLink>
              <ActiveLink to='/about'>About</ActiveLink>

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
