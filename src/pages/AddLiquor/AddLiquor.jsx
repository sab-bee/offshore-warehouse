import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/firebase.init'
import { toast } from 'react-toastify'

const AddLiquor = () => {
  const { register, handleSubmit, reset } = useForm()
  const [user] = useAuthState(auth)

  const onSubmit = async (data) => {
    let { productPrice: price, quantity: quan, ...rest } = data

    const productPrice = parseInt(price)
    const quantity = parseInt(quan)
    const email = user?.email
    const newData = { ...rest, productPrice, quantity, email }

    axios.post('http://localhost:5000/api/liquor', newData).then((res) => {
      console.log(res)
      toast.success('item added', {
        autoClose: 1500,
      })
    })
    reset()
  }
  return (
    <motion.div
      className='min-h-[300px] w-4/5 sm:w-3/5 md:w-1/2 lg:2-2/6 xl:w-1/3 mx-auto my-12 rounded-lg p-12 shadow-lg'
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.1 }}
    >
      <h2 className='my-5 text-3xl text-center font-monea'>Add new item</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='
        flex
        flex-col
        gap-7
      '
      >
        <div className='flex flex-col gap-3'>
          <label htmlFor='productName'>Product name</label>
          <input
            id='productName'
            className='
            bg-white p-3 text-brown-500 border-b-2 border-transparent focus:border-b-2 transition-colors focus:border-brown-500 outline-none'
            placeholder='Mayacamas Vineyards'
            type='text'
            {...register('productName', { required: true, maxLength: 100 })}
          />{' '}
        </div>

        <div className='flex flex-col gap-3'>
          <label htmlFor='productPrice'>Product price</label>
          <input
            id='productPrice'
            className='bg-white p-3 text-brown-500 border-b-2 border-transparent focus:border-b-2 transition-colors focus:border-brown-500 outline-none'
            placeholder='50'
            type='number'
            {...register('productPrice', {
              required: true,
              min: 4,
              max: 90000,
            })}
          />
        </div>

        <div className='flex flex-col gap-3'>
          <label htmlFor='supplier'>Supplier</label>
          <input
            id='supplier'
            className='bg-white p-3 text-brown-500 border-b-2 border-transparent focus:border-b-2 transition-colors focus:border-brown-500 outline-none'
            placeholder='henry'
            type='text'
            {...register('supplier', { required: true })}
          />
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor='quantity'>Quantity</label>
          <input
            id='quantity'
            className='bg-white p-3 text-brown-500 border-b-2 border-transparent focus:border-b-2 transition-colors focus:border-brown-500 outline-none'
            placeholder='16'
            type='number'
            {...register('quantity', { required: true, min: 1, max: 2000 })}
          />
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor='thumbnail'>Product thumbnail</label>
          <input
            id='thumbnail'
            className='bg-white p-3 text-brown-500 border-b-2 border-transparent focus:border-b-2 transition-colors focus:border-brown-500 outline-none'
            placeholder='https://liquor.png'
            type='text'
            {...register('thumbnail', { required: true })}
          />
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor='banner'>Product banner</label>
          <input
            id='banner'
            className='bg-white p-3 text-brown-500 border-b-2 border-transparent focus:border-b-2 transition-colors focus:border-brown-500 outline-none'
            placeholder='https://liquor_banner.png'
            type='text'
            {...register('banner', { required: true })}
          />
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor='category'>Select category</label>
          <select
            id='category'
            className='bg-white p-2 text-brown-500 outline-none'
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
        <div className='flex flex-col gap-3'>
          <label htmlFor='detail'>Product detail</label>
          <textarea
            id='detail'
            className='bg-white p-3 text-brown-500 border-b-2 border-transparent focus:border-b-2 transition-colors focus:border-brown-500 outline-none'
            placeholder='Mayacamas Vineyards’ 2014 Cabernet Sauvignon is a graceful return to form from an iconic Napa winery.'
            rows='6'
            type=''
            {...register('detail', { required: true, minLength: 10 })}
          />
        </div>
        <input
          className='bg-brown-500 text-white p-2 cursor-pointer font-monea text-2xl'
          type='submit'
          value='add liquor'
        />
      </form>
    </motion.div>
  )
}

export default AddLiquor
