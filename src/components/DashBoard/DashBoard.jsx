
import { motion } from 'framer-motion'

const DashBoard = () => {
  const order = 216
  const rev = 216
  return (
    <div className='mt-16'>
      <motion.h2
        className='text-center font-semibold text-4xl text-gray-700'
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 1 }}
      >
        daily dashboard
      </motion.h2>
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12'>
        <div className='hover:scale-105 transition-transform'>
          <motion.div
            className=' h-36 rounded-lg p-8 bg-blue-200 transition-colors text-blue-900'
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 1 }}
          >
            <h2>Orders</h2>
            <p className='font-semibold text-2xl'>{order}</p>
            <p>weekly: 11000</p>
          </motion.div>
        </div>
        <div className='hover:scale-105 transition-transform'>
          <motion.div
            className=' h-36 rounded-lg p-8 bg-red-200 transition-colors text-red-900'
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 1 }}
          >
            <h2>Revenue</h2>
            <p className='font-semibold text-2xl'>{rev}</p>
            <p>weekly: 11000</p>
          </motion.div>
        </div>
        <div className='hover:scale-105 transition-transform'>
          <motion.div
            className='h-36 rounded-lg p-8 bg-green-200 transition-colors text-green-900'
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 1 }}
          >
            <h2>Total stock</h2>
            <p className='font-semibold text-2xl'>215</p>
            <p>last week: 11000</p>
          </motion.div>
        </div>
        <div className='hover:scale-105 transition-transform'>
          <motion.div
            className='h-36 rounded-lg p-8 bg-orange-200 transition-colors text-orange-900'
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 1 }}
          >
            <h2>Empty storage</h2>
            <p className='font-semibold text-2xl'>215</p>
            <p>total: 11000</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default DashBoard
