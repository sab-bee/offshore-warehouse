import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

const Inventory = () => {
  const { register, handleSubmit, reset } = useForm()
  const { id } = useParams()
  const navigate = useNavigate()
  const [liquor, setLiquor] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:5000/api/liquor/${id}`).then((res) => {
      setLiquor(res.data)
      localStorage.setItem('quantity', liquor.quantity)
    })
  }, [id, liquor.quantity])

  const onSubmit = (data) => {
    const quantityFromLocal = localStorage.getItem('quantity')
    const quantity = parseInt(quantityFromLocal) + parseInt(data.quantity)
    localStorage.setItem('quantity', quantity)
    updateAPI(quantity)
  }

  const handleDeliver = async () => {
    const quantityFromLocal = localStorage.getItem('quantity')
    const quantity = parseInt(quantityFromLocal) - 1
    localStorage.setItem('quantity', quantity)
    updateAPI(quantity)
  }

  const updateAPI = (quantity) => {
    axios
      .put(`http://localhost:5000/api/liquor/${id}`, { quantity })
      .then((res) => {
        console.log(res.data)
        reset()
      })
  }

  return (
    <div className='mb-12'>
      <div className='grid grid-cols-1 lg:grid-cols-2 w-3/4 mx-auto items-center mt-12 gap-y-12 min-h-[72vh]'>
        <motion.div
          className='h-[596px] w-full'
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <img
            className='mx-auto lg:h-[550px] object-cover'
            src={liquor.banner}
            alt={liquor.productName + ' banner'}
          />
        </motion.div>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <h2 className='text-2xl text-brown-900 mb-16'>
            {liquor.productName}
          </h2>
          <p className='mb-6 lg:w-3/5'>{liquor.detail}</p>
          <div>
            <p className='mb-5'>product ID : {liquor._id}</p>
            <h2 className='text-2xl mt-12'>price : {liquor.productPrice}</h2>
            <p className='text-brown-500 mb-12'>supplier : {liquor.supplier}</p>
          </div>
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <button
              className='bg-brown-200 px-5 py-3 w-32 text-brown-900 font-medium'
              onClick={handleDeliver}
            >
              delivered
            </button>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-12'>
              <input
                className='px-5 py-3 bg-brown-50 w-32 border border-brown-400'
                type='number'
                placeholder='quantity'
                {...register('quantity', { required: true, min: 1, max: 5000 })}
              />
              <input
                className='bg-brown-900 px-5 py-3 w-32 ml-5 text-white cursor-pointer'
                type='submit'
                value='restock'
              />
            </form>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className='text-center font-medium'
        initial={{ y: 1, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
      >
        <button
          className='font-medium text-brown-900 text-xl underline mt-5'
          onClick={() => navigate('/manageInventories')}
        >
          manage inventories
        </button>
      </motion.div>
    </div>
  )
}

export default Inventory
