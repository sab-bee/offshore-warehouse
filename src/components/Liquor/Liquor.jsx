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
    <div className='flex flex-col justify-between min-h-[680px]'>
      <div>
        <div className='mx-auto'>
          <img
            className='mx-auto md:h-[300px] object-cover hover:scale-110 transition-transform ease-out duration-300'
            src={thumbnail}
            alt='liquor bottle'
          />
        </div>
        <div className='p-5 space-y-10'>
          <div>
            <h2 className='text-xl font-medium mb-5 text-brown-500'>{name}</h2>
            <p className='min-h-[100px]'>
              {detail.length > 200 ? detail.slice(0, 200) + ' ...' : detail}
            </p>
          </div>
        </div>
      </div>
      <div className=''>
        <div className='flex justify-between items-center p-5'>
          <h2 className='text-3xl font-semibold text-brown-400'>$ {price}</h2>
          <div>
            <p>
              quantity :{' '}
              <span className='text-brown-500 font-medium'>{quantity}</span>
            </p>
            <p>
              supplier :{' '}
              <span className='text-brown-500 font-medium'>{supplier}</span>
            </p>
          </div>
        </div>
        <div className='text-center mt-10'>
          <button
            className='p-3 bg-brown-900 text-white'
            onClick={() => navigate(`inventory/${_id}`)}
          >
            manage
          </button>
        </div>
      </div>
    </div>
  )
}

export default Liquor
