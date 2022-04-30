import { useLiquors } from '../../hooks/useLiquors'
import bin from '../../assets/icon/bin.svg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const ManageInventories = () => {
  const { liquors, setLiquors } = useLiquors()
  const navigate = useNavigate()

  const removeFromStock = async (_id) => {
    if (!window.confirm('are you sure?')) return

    axios.delete(`http://localhost:5000/api/liquor/${_id}`).then((res) => {
      console.log(res)
      const rest = liquors.filter((liquor) => liquor._id !== _id)
      setLiquors(rest)
    })
  }
  return (
    <div className=' bg-brown-extra-light w-full md:w-4/5 lg:w-1/2 mx-auto mt-12 p-6 overflow-hidden rounded-2xl'>
      <motion.table
        className='w-full'
        initial={{ y: 500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.1 }}
      >
        <thead className='bg-brown-50'>
          <tr>
            <th className='p-5'>product</th>
            <th className='p-5'>price</th>
            <th className='p-5'>quantiry</th>
            <th className='p-5'>remove stock</th>
          </tr>
        </thead>

        <tbody className=''>
          {liquors.map((liquor) => (
            <ManageLiquor
              key={liquor._id}
              liquor={liquor}
              removeFromStock={removeFromStock}
            ></ManageLiquor>
          ))}
        </tbody>
      </motion.table>
      <motion.button
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.8 }}
        className='bg-brown-400 p-3 w-full text-white mt-5 rounded-md hover:bg-brown-500'
        onClick={() => navigate('/addProduct')}
      >
        add new liquor
      </motion.button>
    </div>
  )
}

function ManageLiquor({ liquor, removeFromStock }) {
  const { productName, productPrice, quantity, thumbnail, _id } = liquor

  return (
    <tr className=' bg-white border hover:bg-brown-50'>
      <td className='w-1/2'>
        <div className=' flex items-center gap-4 w-4/5 mx-auto'>
          <img
            className='h-9 object-cover rounded-full bg-gray-200'
            src={thumbnail}
            alt=''
          />
          <p>{productName}</p>
        </div>
      </td>
      <td className='text-center'>$ {productPrice}</td>
      <td className='text-center'>{quantity}</td>
      <td className='text-center '>
        <button className=''>
          <img src={bin} alt='' onClick={() => removeFromStock(_id)} />
        </button>
      </td>
    </tr>
  )
}
export default ManageInventories
