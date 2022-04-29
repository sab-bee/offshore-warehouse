import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

const AddLiquor = () => {
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = async (data) => {
    // console.log(data)
    axios
      .post('http://localhost:5000/api/liquor', data)
      .then((res) => console.log(res))
    reset()
  }
  return (
    <div className='min-h-[300px] w-4/5 sm:w-3/5 md:w-1/2 lg:2-2/6 xl:w-1/3 mx-auto border-2 mt-12 rounded-lg p-12'>
      <h2 className='my-5 text-3xl text-center'>add new item</h2>
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
            bg-brown-50 p-3 text-brown-500'
            placeholder='Mayacamas Vineyards'
            type='text'
            {...register('productName', { required: true, maxLength: 100 })}
          />{' '}
        </div>

        <div className='flex flex-col gap-3'>
          <label htmlFor='productPrice'>Product price</label>
          <input
            id='productPrice'
            className='bg-brown-50 p-3 text-brown-500'
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
            className='bg-brown-50 p-3 text-brown-500'
            placeholder='henry'
            type='text'
            {...register('supplier', { required: true })}
          />
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor='quantity'>Quantity</label>
          <input
            id='quantity'
            className='bg-brown-50 p-3 text-brown-500'
            placeholder='16'
            type='number'
            {...register('quantity', { required: true, min: 1, max: 2000 })}
          />
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor='thumbnail'>Product thumbnail</label>
          <input
            id='thumbnail'
            className='bg-brown-50 p-3 text-brown-500'
            placeholder='https://liquor.png'
            type='text'
            {...register('thumbnail', { required: true })}
          />
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor='banner_thumbnail'>Product banner</label>
          <input
            id='banner'
            className='bg-brown-50 p-3 text-brown-500'
            placeholder='https://liquor_banner.png'
            type='text'
            {...register('banner', { required: true })}
          />
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor='category'>Select category</label>
          <select
            id='category'
            className='bg-brown-50 p-2 text-brown-500'
            {...register('category', { required: true })}
            defaultValue='none'
          >
            <option value='wine'>wine</option>
            <option value='tequila'>tequila</option>
            <option value='whiskey'>whiskey</option>
          </select>
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor='detail'>Product detail</label>
          <textarea
            id='detail'
            className='bg-brown-50 p-3 text-brown-500'
            placeholder='Mayacamas Vineyards’ 2014 Cabernet Sauvignon is a graceful return to form from an iconic Napa winery.'
            rows='6'
            type=''
            {...register('detail', { required: true, minLength: 10 })}
          />
        </div>
        <input
          className='bg-brown-500 text-white p-2 cursor-pointer'
          type='submit'
          value='add new liquor'
        />
      </form>
    </div>
  )
}

export default AddLiquor
