import React, { useState } from 'react'
import { motion } from 'framer-motion'

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
    <motion.div
      className='w-full h-screen bg-[rgba(0,0,0,0.45)] fixed top-0'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        key='modal'
        className='absolute inset-0 m-auto h-64 sm:w-[500px] rounded-2xl bg-white px-6'
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        exit={{ scale: 0.3, opacity: 0 }}
      >
        <p className='font-semibold text-gray-800 mt-5 text-xl select-none'>
          remove item
        </p>
        <p className='mt-4 text-gray-600'>
          are you sure you want to delete this item? Removing this itme means
          you removing this from your stock.
        </p>
        <input
          className='mt-4 p-2 outline-none border-b border-primary'
          type='text'
          placeholder='confirm'
          onChange={(e) => handleInput(e)}
        />
        <p className='text-gray-500 text-base mt-2'>
          type <span className='font-semibold'>confirm</span> here
        </p>
        <div className='text-center space-x-2 mt-5 absolute right-8 bottom-8'>
          <button
            className='hover:border-primary border-b border-transparent py-2 px-8 transition-colors'
            onClick={() => {
              setShowModal(false)
            }}
          >
            cancel
          </button>{' '}
          <button
            className='bg-red-500 text-white py-2 px-8 hover:bg-red-700 transition-colors disabled:bg-red-200'
            disabled={!proceed}
            onClick={() => {
              confirm()
              setShowModal(false)
            }}
          >
            remove
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Modal
