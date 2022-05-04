import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/firebase.init'
import { toast } from 'react-toastify'
import { Spinner } from '../../components'

const AddLiquor = () => {
  const { register, handleSubmit, reset } = useForm()
  const [user] = useAuthState(auth)
  const [loading, setLoading] = useState(false)
  const onSubmit = async (data) => {
    let { productPrice: price, quantity: quan, ...rest } = data

    const productPrice = parseInt(price)
    const quantity = parseInt(quan)
    const email = user?.email
    const newData = { ...rest, productPrice, quantity, email }
    setLoading(true)
    axios
      .post('https://pacific-oasis-60084.herokuapp.com/api/liquor', newData)
      .then((res) => {
        console.log(res)
        setLoading(false)
        toast.success('item added', {
          autoClose: 1500,
        })
      })
    reset()
  }
  return loading?<Spinner></Spinner>:(
    <motion.div
      className='min-h-[300px] w-4/5 sm:w-3/5 md:w-1/2 lg:2-2/6 xl:w-1/3 mx-auto my-12 rounded-2xl p-12 bg-white'
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.1 }}
    >
      <h2 className='my-5 text-3xl text-center text-gray-600'>Add new item</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='
        flex
        flex-col
        gap-7
      '
      >
        <div className='flex flex-col'>
          <label htmlFor='productName'>Product name</label>
          <input
            id='productName'
            className='
            bg-white p-3  border-b-2 border-gray-300 focus:border-b-2 transition-colors focus:border-primary outline-none'
            placeholder='Mayacamas Vineyards'
            type='text'
            {...register('productName', { required: true, maxLength: 100 })}
          />{' '}
        </div>

        <div className='flex flex-col '>
          <label htmlFor='productPrice'>Product price</label>
          <input
            id='productPrice'
            className='bg-white p-3  border-b-2 border-gray-300 focus:border-b-2 transition-colors focus:border-primary outline-none'
            placeholder='50'
            type='number'
            {...register('productPrice', {
              required: true,
              min: 4,
              max: 9000,
            })}
          />
        </div>

        <div className='flex flex-col '>
          <label htmlFor='supplier'>Supplier</label>
          <input
            id='supplier'
            className='bg-white p-3  border-b-2 border-gray-300 focus:border-b-2 transition-colors focus:border-primary outline-none'
            placeholder='top liquor'
            type='text'
            {...register('supplier', { required: true })}
          />
        </div>
        <div className='flex flex-col '>
          <label htmlFor='quantity'>Quantity</label>
          <input
            id='quantity'
            className='bg-white p-3  border-b-2 border-gray-300 focus:border-b-2 transition-colors focus:border-primary outline-none'
            placeholder='16'
            type='number'
            {...register('quantity', { required: true, min: 1, max: 2000 })}
          />
        </div>
        <div className='flex flex-col '>
          <label htmlFor='thumbnail'>Product thumbnail</label>
          <input
            id='thumbnail'
            className='bg-white p-3  border-b-2 border-gray-300 focus:border-b-2 transition-colors focus:border-primary outline-none'
            placeholder='https://liquor.png'
            type='text'
            {...register('thumbnail', { required: true })}
          />
        </div>
        <div className='flex flex-col '>
          <label htmlFor='banner'>Product banner</label>
          <input
            id='banner'
            className='bg-white p-3  border-b-2 border-gray-300 focus:border-b-2 transition-colors focus:border-primary outline-none'
            placeholder='https://liquor_banner.png'
            type='text'
            {...register('banner', { required: true })}
          />
        </div>
        <div className='flex flex-col '>
          <label htmlFor='category'>Select category</label>
          <select
            id='category'
            className='bg-white p-2 outline-none border'
            {...register('category', { required: true })}
            defaultValue='none'
          >
            <option className='' value='wine'>
              wine
            </option>
            <option value='tequila'>tequila</option>
            <option value='whiskey'>whiskey</option>
          </select>
        </div>
        <div className='flex flex-col '>
          <label htmlFor='detail'>Product detail</label>
          <textarea
            id='detail'
            className='bg-white p-3  border-b-2 border-gray-300 focus:border-b-2 transition-colors focus:border-primary outline-none'
            placeholder='Mayacamas Vineyards’ 2014 Cabernet Sauvignon is a graceful return to form from an iconic Napa winery.'
            rows='4'
            type=''
            {...register('detail', { required: true, minLength: 10 })}
          />
        </div>
        <input
          className='bg-primary text-white p-3 cursor-pointer hover:bg-indigo-700 transition-colors rounded'
          type='submit'
          value='add liquor'
        />
      </form>
    </motion.div>
  )
}

export default AddLiquor
