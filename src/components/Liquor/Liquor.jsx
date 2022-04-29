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
    <div className='flex flex-col justify-between '>
      <div>
        <div className='mx-auto min-h-[300px]'>
          <img className='mx-auto' src={thumbnail} alt='liquor bottle' />
        </div>
        <div className='p-5 space-y-10'>
          <div>
            <h2 className='text-xl font-medium mb-5 text-brown-500'>{name}</h2>
            <p className='min-h-[100px]'>
              {detail.length > 200 ? detail.slice(0, 200) : detail}
            </p>
          </div>
        </div>
      </div>
      <div className=''>
        <div className='flex justify-between items-center p-5'>
          <h2 className='text-3xl font-semibold text-brown-400'>$ {price}</h2>
          <div>
            <p>
              quantity : <span className='bg-brown-50'>{quantity}</span>
            </p>
            <p>
              supplier : <span className='bg-brown-50'>{supplier}</span>
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
