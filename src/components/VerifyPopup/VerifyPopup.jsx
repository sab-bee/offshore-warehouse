import React from 'react'
import alert from '../../assets/icon/alert.svg'

const VerifyPopup = () => {
  return (
    <div className='h-60 w-4/5 sm:w-3/5 xl:w-1/3 shadow-xl absolute inset-0 mx-auto my-32 sm:m-auto rounded-lg grid justify-items-center'>
      <img src={alert} alt='' />
      <p className='text-xl w-3/5'>
        to explore this section your email need to be verified. please check
        inobox
      </p>
    </div>
  )
}

export default VerifyPopup
