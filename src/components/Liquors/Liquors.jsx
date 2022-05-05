import React, { useEffect, useState } from 'react'
import { useLiquors } from '../../hooks/useLiquors'
import Liquor from '../Liquor/Liquor'
import { motion } from 'framer-motion'
import Spinner from '../Spinner/Spinner'

const Liquors = () => {
  const { liquors, loading } = useLiquors(6)
  const [tamp, setTamp] = useState([])
  useEffect(() => {
    setTamp(liquors)
  }, [liquors])

  function sort() {
    let min = 0
    const arr = [...tamp]
    for (let i = 0; i < arr.length; i++) {
      min = i
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j].productPrice < arr[min].productPrice) {
          min = j
        }
      }
      if (min !== i) {
        ;[arr[i], arr[min]] = [arr[min], arr[i]]
      }
    }
    setTamp([...arr])
  }
  console.log(tamp)
  return loading ? (
    <Spinner></Spinner>
  ) : (
    <motion.div
      className='mt-12 overflow-hidden w-[90%] mx-auto'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <button className='bg-primary px-6 py-3 hover:bg-indigo-700 rounded text-white' onClick={sort}>
        sort by price
      </button>
      {tamp.map((liquor, index) => {
        if (index > 2) {
          index -= 1
        }
        return (
          <motion.div
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
