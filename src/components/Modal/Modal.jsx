import React, { useState } from 'react'

const Modal = ({ confirm, setShowModal }) => {
  const [proceed, setProceed] = useState(false)

  const handleInput = (e) => {
    if (e.target.value === 'confirm') {
      setProceed(true)
    } else {
      setProceed(false)
    }
  }

  return (
    <div className='w-full h-screen bg-[rgba(0,0,0,0.39)] fixed top-0'>
      <div className='absolute inset-0 m-auto h-64 w-[500px] rounded bg-accent-brown px-6'>
        <p className='font-semibold text-brown-900 mt-5 text-xl'>remove item</p>

        <p className='mt-4 text-brown-500'>
          are you sure you want to delete this item? Removing this itme means
          you removing this from your stock.
        </p>
        <input
          className='mt-4 p-2 outline-none'
          type='text'
          placeholder='confirm'
          onChange={(e) => handleInput(e)}
        />
        <p className='text-brown-500 text-base mt-1'>type <span className='font-semibold'>confirm</span> here</p>
        <div className='text-center space-x-2 mt-5 absolute right-8 bottom-8'>
          <button
            className='hover:border-b-brown-500 border-b-2 border-transparent py-2 px-8 transition-colors'
            onClick={() => {
              setShowModal(false)
            }}
          >
            cancel
          </button>{' '}
          <button
            className='bg-brown-500 text-white py-2 px-8 hover:bg-brown-900 transition-colors disabled:bg-brown-200'
            disabled={!proceed}
            onClick={() => {
              confirm()
              setShowModal(false)
            }}
          >
            remove
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
