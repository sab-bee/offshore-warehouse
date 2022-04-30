import React from 'react'
import { Header, Liquors } from '../../components'

const Home = () => {
  return (
    <div className='w-4/5 mx-auto space-y-12 md:space-y-32 mt-12'>
      <Header></Header>
      <Liquors></Liquors>
    </div>
  )
}

export default Home
