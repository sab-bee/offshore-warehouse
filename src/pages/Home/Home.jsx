import React from 'react'
import { DashBoard, Header, Liquors } from '../../components'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className='w-4/5 mx-auto mt-12'>
      <Header></Header>
      <DashBoard></DashBoard>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
        className='text-center text-4xl text-gray-700 font-semibold mt-16'
      >
        top inventory items
      </motion.p>
      <Liquors></Liquors>
    </div>
  )
}

export default Home
