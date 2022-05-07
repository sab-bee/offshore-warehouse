const Analysis = () => {
  return (
    <div className='mt-20'>
      <h2 className='text-4xl font-semibold text-gray-800 text-center'>
        monthly analytics
      </h2>
      
      <div className='grid md:grid-cols-3 mt-12 '>
        <div className='flex flex-col '>
          <div className='relative'>
            <img
              className='w-full'
              src='https://i.ibb.co/vs95KPW/shipment.png'
              alt=''
            />
            <div className='bg-[rgba(0,0,0,0.6)] absolute w-full h-full top-0 grid items-center justify-items-center'>
              <h2 className='text-white font-semibold text-3xl'>120000</h2>
            </div>
          </div>
          <h2 className='text-2xl font-semibold text-gray-700 text-center mt-4'>
            Total shipment
          </h2>
        </div>

        <div className='flex flex-col '>
          <div className='relative'>
            <img
              className='w-full'
              src='https://i.ibb.co/RzC0ktS/order.png'
              alt=''
            />
            <div className='bg-[rgba(0,0,0,0.6)] absolute w-full h-full top-0 grid items-center justify-items-center'>
              <h2 className='text-white font-semibold text-3xl'>200000</h2>
            </div>
          </div>
          <h2 className='text-2xl font-semibold text-gray-700 text-center mt-4'>
            Local orders
          </h2>
        </div>
        <div className='flex flex-col '>
          <div className='relative'>
            <img
              className='w-full'
              src='https://i.ibb.co/pR5zjCt/due.png'
              alt=''
            />
            <div className='bg-[rgba(0,0,0,0.6)] absolute w-full h-full top-0 grid items-center justify-items-center'>
              <h2 className='text-white font-bold text-3xl'>1200</h2>
            </div>
          </div>
          <h2 className='text-2xl font-semibold text-gray-700 text-center mt-4'>
            Due orders
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Analysis
