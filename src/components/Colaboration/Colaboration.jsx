import React from 'react'

const Colaboration = () => {
  return (
    <>
      <h2 className='text-4xl font-semibold text-gray-800 text-center mt-20'>
        Collaboration
      </h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10'>
        <img
          className='md:w-[600px]'
          src='https://i.ibb.co/mcD5tBG/colab.webp'
          alt=''
        />
        <div>
          <h2 className='text-2xl font-medium mb-5'>Collaboration and Solution</h2>
          <p className=''>
            With collboration with our partner we are able to establish a
            seamless workflow. We are binding a one way solution to the
            management system.
          </p>
          <div className='my-8'>
            <ul className='space-y-3 mb-8'>
              <li>
                <p className='font-medium'>Environment</p>
                <p>
                  Packagin is built with pure environment friendly materials.
                </p>
              </li>
              <li>
                <p className='font-medium'>Delivery system</p>
                <p>We garantee ontime delivery and accurate tracking system.</p>
              </li>
              <li>
                <p className='font-medium'>Trusted source</p>
                <p>
                  We have sources from all over the world and Henry Liquor has
                  been our trusted source for last 2 decades.
                </p>
              </li>
            </ul>
          </div>

          <div>
            <p>our partners : </p>
            <div className='flex space-x-4'>
              <p className='pb-1 border-b-2 border-primary'>henry liquor</p>
              <p className='pb-1 border-b-2 border-primary'>ship anywhere</p>
              <p className='pb-1 border-b-2 border-primary'>onix cargo</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Colaboration
