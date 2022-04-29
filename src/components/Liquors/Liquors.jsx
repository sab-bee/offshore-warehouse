import React from 'react'
import { useLiquors } from '../../hooks/useLiquors'
import Liquor from '../Liquor/Liquor'

const Liquors = () => {
  const { liquors } = useLiquors(6)

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20'>
      {liquors.map((liquor) => (
        <Liquor key={liquor._id} liquor={liquor}></Liquor>
      ))}
    </div>
  )
}

export default Liquors
