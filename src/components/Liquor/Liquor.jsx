import React from 'react'
import { useNavigate } from 'react-router-dom'

const Liquor = ({ liquor }) => {
  const {
    productName: name,
    productPrice: price,
    quantity,
    thumbnail,
    supplier,
    detail,
    _id,
  } = liquor

  const navigate = useNavigate()
  return (
    <div className='grid lg:grid-cols-3 gap-5 lg:justify-items-center items-center bg-white rounded-xl p-8 lg:p-4 my-5 hover:bg-orange-50 transition-all duration-300 relative border-b'>
      <div className='mx-auto'>
        <img
          loading='lazy'
          className='mx-auto h-[200px] object-cover hover:scale-110 transition-transform ease-out duration-300'
          src={thumbnail}
          alt='liquor bottle'
        />
      </div>
      <div>
        <div className=''>
          <div>
            <h2 className='text-xl font-medium mb-5 '>{name}</h2>
            <p className='min-h-[100px]'>{detail}</p>
          </div>
        </div>
      </div>
      <div className='space-y-6'>
        <div className=''>
          <h2 className='text-3xl font-semibold'>$ {price}</h2>
        </div>
        <div>
          <p>
            quantity : <span className=' font-medium'>{quantity}</span>
          </p>
          <p>
            supplier : <span className=' font-medium'>{supplier}</span>
          </p>
        </div>

        <button
          className='p-3 bg-primary text-white rounded-md'
          onClick={() => navigate(`inventory/${_id}`)}
        >
          manage
        </button>
      </div>
    </div>
  )
}

export default Liquor
