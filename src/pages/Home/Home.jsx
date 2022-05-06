import React from 'react'
import {Analysis, Header, Liquors, Statistics } from '../../components'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className='w-4/5 mx-auto'>
      <Header></Header>
      <Analysis></Analysis>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
        className='text-center text-4xl text-gray-800 font-semibold mt-20'
      >
        top inventory items
      </motion.p>
      <Liquors></Liquors>
      <Statistics></Statistics>
    </div>
  )
}

export default Home
