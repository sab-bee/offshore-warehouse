import React from 'react'
import { useLocation } from 'react-router-dom'

const Footer = () => {
  const { pathname } = useLocation()
  const paths = ['login', 'register']

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.email.value)
    event.target.reset()
  }
  return (
    !paths.some((path) => pathname.includes(path)) && (
      <div className='mt-auto bg-primary '>
        <div className='min-h-[300px] w-4/5 mx-auto grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 text-brown-50 py-8 items-center '>
          <div className='text-center sm:text-left'>
            <h2 className='mb-4'>our policy</h2>
            <ul className='text-sky-white space-y-3'>
              <li>quality product</li>
              <li>no damaged product</li>
              <li>lifetime warranty</li>
              <li>extra shipping cost</li>
            </ul>
          </div>
          <div className='text-center sm:text-left'>
            <h2 className='mb-4'>our partners</h2>
            <ul className='text-sky-white space-y-3'>
              <li>henry liquor</li>
              <li>surveillance cctv</li>
              <li>ship anywhere</li>
              <li>onix cargo</li>
            </ul>
          </div>
          <div className='text-center sm:text-left'>
            <h2 className='mb-4'>security</h2>
            <ul className='text-sky-white space-y-3'>
              <li>managed by professionals</li>
              <li>24hr cctv</li>
              <li>wheather proof</li>
              <li>safe shipping</li>
            </ul>
          </div>
          <div className='text-center sm:text-left'>
            <h2 className='mb-7'>get updates</h2>
            <form className='flex flex-col space-y-3' onSubmit={handleSubmit}>
              <input
                className='p-3 outline-none '
                type='email'
                name='email'
                placeholder='enter email address'
              />
              <input
                className='border border-white p-3 cursor-pointer'
                type='submit'
                value='submit'
              />
            </form>
          </div>
        </div>
      </div>
    )
  )
}

export default Footer
