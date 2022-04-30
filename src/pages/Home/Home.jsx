import React from 'react'
import { Header, Liquors } from '../../components'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className='w-4/5 mx-auto space-y-12 md:space-y-32 mt-12'>
      <Header></Header>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
        className='text-center text-4xl font-semibold text-brown-500'
      >
        inventory items
      </motion.p>
      <Liquors></Liquors>
    </div>
  )
}

export default Home
