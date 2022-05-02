import React from 'react'

const Footer = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.email.value)
    event.target.reset()
  }
  return (
    <div className='mt-auto'>
      <div className='min-h-64 bg-brown-900 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 text-brown-50 py-8 px-12'>
        <div className='text-center sm:text-left'>
          <h2 className='mb-4'>our policy</h2>
          <ul className='text-brown-200 space-y-3'>
            <li>quality product</li>
            <li>no damaged product</li>
            <li>lifetime warranty</li>
            <li>extra shipping cost</li>
          </ul>
        </div>
        <div className='text-center sm:text-left'>
          <h2 className='mb-4'>our partners</h2>
          <ul className='text-brown-200 space-y-3'>
            <li>henry liquor</li>
            <li>surveillance cctv</li>
            <li>ship anywhere</li>
            <li>onix cargo</li>
          </ul>
        </div>
        <div className='text-center sm:text-left'>
          <h2 className='mb-4'>security</h2>
          <ul className='text-brown-200 space-y-3'>
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
              className='p-3 text-brown-500 outline-none bg-brown-50'
              type='email'
              name='email'
              placeholder='enter email address'
            />
            <input
              className='bg-brown-200 p-3 cursor-pointer'
              type='submit'
              value='submit'
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Footer
