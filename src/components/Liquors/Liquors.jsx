import React from 'react'
import { useLiquors } from '../../hooks/useLiquors'
import Liquor from '../Liquor/Liquor'
import { motion } from 'framer-motion'
import Spinner from '../Spinner/Spinner'

const Liquors = () => {
  const { liquors } = useLiquors(6)

  return liquors.length === 0 ? (
    <Spinner></Spinner>
  ) : (
    <motion.div
      className='mt-12 overflow-hidden grid md:grid-cols-2 lg:block'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {liquors.map((liquor, index) => {
        if (index > 2) {
          index -= 1
        }
        return (
          <motion.div
            className='w-[90%] mx-auto'
            key={liquor._id}
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Liquor liquor={liquor}></Liquor>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export default Liquors
