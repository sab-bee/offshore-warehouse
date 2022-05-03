import React from 'react'

const Spinner = () => {
  return (
    <div className='flex justify-center h-[100vh] items-center'>
      <div className='w-8 h-8 border-2 animate-spin border-primary grid justify-items-center items-center'>
        <div className='w-6 h-6 border-2 delay-700 animate-spin border-primary'></div>
      </div>
    </div>
  )
}

export default Spinner
