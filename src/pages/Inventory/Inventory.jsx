import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

const Inventory = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [liquor, setLiquor] = useState({})

  const { register, handleSubmit, reset } = useForm()
  const onSubmit = (data) => {
    const quantity = liquor.quantity + 1 * data.quantity
    
    axios
      .put(`http://localhost:5000/api/liquor/${id}`, { quantity })
      .then((res) => {
        console.log(res.data)
        reset()
      })
  }

  useEffect(() => {
    axios.get(`http://localhost:5000/api/liquor/${id}`).then((res) => {
      setLiquor(res.data)
    })
  }, [id])
  return (
    <div className='mb-12'>
      <div className='grid grid-cols-1 lg:grid-cols-2 w-3/4 mx-auto items-center mt-12 gap-y-12 min-h-[72vh]'>
        <div className=''>
          <img
            className='mx-auto lg:h-[550px] object-cover'
            src={liquor.banner}
            alt={liquor.productName + ' banner'}
          />
        </div>
        <div className=''>
          <h2 className='text-2xl text-brown-900 mb-16'>
            {liquor.productName}
          </h2>
          <p className='mb-6 lg:w-3/5'>{liquor.detail}</p>
          <p className='mb-5'>product ID : {liquor._id}</p>
          <h2 className='text-2xl mt-12'>price : {liquor.productPrice}</h2>
          <p className='text-brown-500 mb-12'>supplier : {liquor.supplier}</p>
          <div>
            <button className='bg-brown-200 px-5 py-3 w-32 text-brown-900 font-medium'>
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
          </div>
        </div>
      </div>
      <div className='text-center font-medium'>
        <button
          className='font-medium text-brown-900 text-xl underline mt-5'
          onClick={() => navigate('/manageInventories')}
        >
          manage inventories
        </button>
      </div>
    </div>
  )
}

export default Inventory