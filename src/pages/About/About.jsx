import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
      <div id='about-bg' className='h-screen w-full'>
        <div className='bg-black bg-opacity-60 h-full py-12'>
          <div className='grid grid-cols-4 w-3/5 mx-auto gap-8'>
            <div className='bg-white'></div>
            <div className='text-white col-span-3'>
              <h2 className='text-3xl mb-4'>Management system</h2>
              <p>
                A complete warehouse management system to maintain the warehouse online. An ecosystem where products is managed by professionals. To ensure safety of the products we contineuosly keep tracking on the health of the products.
              </p>
            </div>
          </div>
          <div className='grid grid-cols-4 w-3/5 mx-auto gap-8 mt-12'>
            <div className='bg-white'></div>
            <div className='text-white col-span-3'>
              <h2 className='text-3xl mb-4'>Digital storage</h2>
              <p>
                All the storage have proper safety measure. Installed digital devices to check with the storage to ensure proper temperature
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
