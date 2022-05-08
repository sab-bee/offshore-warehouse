import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/firebase.init'
import { toast } from 'react-toastify'
import { Spinner } from '../../components'

const AddLiquor = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    trigger,
  } = useForm({
    mode: 'onChange',
  })

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
  return loading ? (
    <Spinner></Spinner>
  ) : (
    <motion.div
      className='relative min-h-[300px] w-4/5 sm:w-3/5 md:w-1/2 lg:2-2/6 xl:w-1/3 mx-auto my-12 rounded-2xl p-12 bg-white after:content-[""] after:w-[2px] after:h-full after:bg-red-500 after:absolute after:top-0 after:-left-4'
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
        gap-12
      '
      >
        <div className='flex flex-col relative'>
          <label htmlFor='productName'>Product name</label>
          <input
            id='productName'
            className='
            bg-white p-3  border-b-2 border-gray-300 focus:border-b-2 transition-colors focus:border-primary outline-none'
            placeholder='Mayacamas Vineyards'
            type='text'
            {...register('productName', {
              required: 'must have a name',
              maxLength: {
                value: 100,
                message: 'maximum 100 letters',
              },
            })}
            onBlur={() => trigger('productName')}
          />
          {errors.productName && (
            <p className='text-red-600 absolute -bottom-7'>
              {errors.productName.message}
            </p>
          )}
        </div>

        <div className='flex flex-col relative'>
          <label htmlFor='productPrice'>Product price</label>
          <input
            id='productPrice'
            className='bg-white p-3  border-b-2 border-gray-300 focus:border-b-2 transition-colors focus:border-primary outline-none'
            placeholder='50'
            type='number'
            {...register('productPrice', {
              required: 'price is required',
              min: {
                value: 50,
                message: 'minimum price 50$',
              },
              max: {
                value: 9000,
                message: 'maximum price 9000$',
              },
            })}
            onBlur={() => trigger('productPrice')}
          />
          {errors.productPrice && (
            <p className='text-red-600 absolute -bottom-7'>
              {errors.productPrice.message}
            </p>
          )}
        </div>

        <div className='flex flex-col relative'>
          <label htmlFor='supplier'>Supplier</label>
          <input
            id='supplier'
            className='bg-white p-3  border-b-2 border-gray-300 focus:border-b-2 transition-colors focus:border-primary outline-none'
            placeholder='top liquor'
            type='text'
            {...register('supplier', { required: 'supplier required' })}
            onBlur={() => trigger('supplier')}
          />
          {errors.supplier && (
            <p className='text-red-600 absolute -bottom-7'>
              {errors.supplier.message}
            </p>
          )}
        </div>
        <div className='flex flex-col relative'>
          <label htmlFor='quantity'>Quantity</label>
          <input
            id='quantity'
            className='bg-white p-3  border-b-2 border-gray-300 focus:border-b-2 transition-colors focus:border-primary outline-none'
            placeholder='16'
            type='number'
            {...register('quantity', {
              required: 'quantity required',
              min: {
                value: 10,
                message: 'minimum 10 items',
              },
              max: {
                value: 20000,
                message: 'maximum 20,000 items',
              },
            })}
            onBlur={() => trigger('quantity')}
          />

          {errors.quantity && (
            <p className='text-red-600 absolute -bottom-7'>
              {errors.quantity.message}
            </p>
          )}
        </div>
        <div className='flex flex-col relative'>
          <label htmlFor='thumbnail'>Product thumbnail</label>
          <input
            id='thumbnail'
            className='bg-white p-3  border-b-2 border-gray-300 focus:border-b-2 transition-colors focus:border-primary outline-none'
            placeholder='https://liquor.png'
            type='text'
            {...register('thumbnail')}
          />
        </div>
        <div className='flex flex-col relative'>
          <label htmlFor='banner'>Product banner</label>
          <input
            id='banner'
            className='bg-white p-3  border-b-2 border-gray-300 focus:border-b-2 transition-colors focus:border-primary outline-none'
            placeholder='https://liquor_banner.png'
            type='text'
            {...register('banner')}
          />
        </div>
        <div className='flex flex-col relative'>
          <label htmlFor='category'>Select category</label>
          <select
            id='category'
            className='bg-white p-2 outline-none border'
            {...register('category')}
            defaultValue='none'
          >
            <option className='' value='wine'>
              wine
            </option>
            <option value='tequila'>tequila</option>
            <option value='whiskey'>whiskey</option>
          </select>
        </div>
        <div className='flex flex-col relative'>
          <label htmlFor='detail'>Product detail</label>
          <textarea
            id='detail'
            className='bg-white p-3  border-b-2 border-gray-300 focus:border-b-2 transition-colors focus:border-primary outline-none'
            placeholder='Mayacamas Vineyards’ 2014 Cabernet Sauvignon is a graceful return to form from an iconic Napa winery.'
            rows='4'
            type=''
            {...register('detail', {
              required: 'detail required',
              minLength: { value: 10, message: 'minimum 10 character' },
            })}
            onBlur={() => trigger('detail')}
          />
          {errors.detail && (
            <p className='text-red-600 absolute -bottom-7'>
              {errors.detail.message}
            </p>
          )}
        </div>
        <input
          className='bg-primary text-white p-3 cursor-pointer hover:bg-secondary transition-colors rounded'
          type='submit'
          value='add liquor'
        />
      </form>
    </motion.div>
  )
}

export default AddLiquor
