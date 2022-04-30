import React from 'react'

const Modal = () => {
  return (
    <div className='absolute inset-0 m-auto h-48 w-96 rounded-2xl bg-blue-200'>
      <div className='h-full flex flex-col justify-center'>
        <h2 className='text-center'>are you sure you want to delete</h2>

        <div className='text-center'>
          <button className='bg-green-600 py-3 px-5'>yes</button>
          <button className='bg-red-300 py-3 px-5'>no</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
