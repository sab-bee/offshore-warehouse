import React from 'react'
import { useLiquors } from '../../hooks/useLiquors'
import Liquor from '../Liquor/Liquor'
import { motion } from 'framer-motion'

const Liquors = () => {
  const { liquors } = useLiquors(6)

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20'>
      {liquors.map((liquor, index) => {
        if (index > 2) {
          index = index - 2
        }
        return (
          <motion.div
            key={liquor._id}
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.3 }}
            viewport={{ once: true }}
          >
            <Liquor liquor={liquor}></Liquor>
          </motion.div>
        )
      })}
    </div>
  )
}

export default Liquors
