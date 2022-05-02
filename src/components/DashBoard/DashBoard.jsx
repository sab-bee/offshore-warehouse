import React from 'react'
import { motion } from 'framer-motion'

const DashBoard = () => {
  return (
    <div className='mt-16'>
      <h2 className='text-center font-semibold text-4xl text-gray-700'>daily dashboard</h2>
      <div className='grid grid-cols-4 gap-8 mt-12'>
        <motion.div
          className='bg-white h-36 rounded-lg p-8'
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2>orders</h2>
          <p className='font-semibold text-2xl'>215</p>
          <p>weekly: 11000</p>
        </motion.div>
        <motion.div
          className='bg-white h-36 rounded-lg p-8'
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2>revenue</h2>
          <p className='font-semibold text-2xl'>215</p>
          <p>weekly: 11000</p>
        </motion.div>
        <motion.div
          className='bg-white h-36 rounded-lg p-8'
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2>total stock</h2>
          <p className='font-semibold text-2xl'>215</p>
          <p>last week: 11000</p>
        </motion.div>
        <motion.div
          className='bg-white h-36 rounded-lg p-8'
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2>empty storage</h2>
          <p className='font-semibold text-2xl'>215</p>
          <p>total: 11000</p>
        </motion.div>
      </div>
    </div>
  )
}

export default DashBoard
