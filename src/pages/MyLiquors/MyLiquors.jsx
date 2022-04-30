import React from 'react'
import { useLiquors } from '../../hooks/useLiquors'
import bin from '../../assets/icon/bin.svg'
import axios from 'axios'
import { motion } from 'framer-motion'

const MyLiquors = () => {
  const { liquors, setLiquors } = useLiquors()

  const removeFromMyList = (_id) => {
    if (!window.confirm('are you sure?')) return

    axios.delete(`http://localhost:5000/api/liquor/${_id}`).then((res) => {
      console.log(res)
      const rest = liquors.filter((liquor) => liquor._id !== _id)
      setLiquors(rest)
    })
  }
  return (
    <div className='w-full md:w-4/5 lg:w-1/2 mx-auto bg-brown-extra-light p-6 rounded-2xl mt-12'>
      <div className='grid grid-cols-4 justify-items-center'>
        <p className='font-medium'>product</p>
        <p className='font-medium'>price</p>
        <p className='font-medium'>quantity</p>
        <p className='font-medium'>action</p>
      </div>
      {liquors.map((liquor, index) => (
        <motion.div
          key={liquor._id}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, ease: 'easeInOut', delay: index * 0.1 }}
        >
          <MyLiquor
            liquor={liquor}
            removeFromMyList={removeFromMyList}
          ></MyLiquor>
        </motion.div>
      ))}
    </div>
  )
}

function MyLiquor({ liquor, removeFromMyList }) {
  const { productName, productPrice, thumbnail, quantity, _id } = liquor
  return (
    <div className='grid grid-cols-4 bg-white my-5 items-center justify-items-center rounded-2xl hover:bg-brown-50'>
      <div className='flex items-center '>
        <img className='h-10' src={thumbnail} alt='' />
        <p>{productName}</p>
      </div>
      <p>$ {productPrice}</p>
      <p>{quantity}</p>
      <button>
        <img src={bin} alt='' onClick={() => removeFromMyList(_id)} />
      </button>
    </div>
  )
}

export default MyLiquors
