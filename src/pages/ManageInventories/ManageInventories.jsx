import { useLiquors } from '../../hooks/useLiquors'
import bin from '../../assets/icon/bin.svg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Modal, Spinner } from '../../components'
import { toast } from 'react-toastify'

const ManageInventories = () => {
  const { liquors, setLiquors, loading } = useLiquors()
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  const [_id, set_id] = useState('')

  const removeFromStock = async (_id) => {
    setShowModal(true)
    set_id(_id)
  }

  function confirm() {
    axios
      .delete(`https://pacific-oasis-60084.herokuapp.com/api/liquor/${_id}`)
      .then((res) => {
        console.log(res)
        const rest = liquors.filter((liquor) => liquor._id !== _id)
        setLiquors(rest)
        toast.success('liquor deleted', {
          autoClose: 1500,
        })
      })
  }

  return loading ? (
    <Spinner></Spinner>
  ) : (
    <>
      <AnimatePresence>
        {showModal && (
          <Modal confirm={confirm} setShowModal={setShowModal}></Modal>
        )}
      </AnimatePresence>
      <div className=' bg-white w-full md:w-4/5 lg:w-1/2 mx-auto my-12 p-6 rounded-2xl min-h-screen flex flex-col shadow-lg border-t-4 border-primary'>
        <motion.table
          className='w-full'
          initial={{ y: 500, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <thead className='bg-white '>
            <tr>
              <th className='p-5 font-medium'>product</th>
              <th className='p-5 font-medium'>price</th>
              <th className='p-5 font-medium'>quantiry</th>
              <th className='p-5 font-medium'>remove stock</th>
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
          className='bg-primary p-3 w-full text-white rounded-md hover:bg-secondary mt-auto transition-colors'
          onClick={() => navigate('/addProduct')}
        >
          add new liquor
        </motion.button>
      </div>
    </>
  )
}

function ManageLiquor({ liquor, removeFromStock }) {
  const { productName, productPrice, quantity, thumbnail, _id } = liquor

  return (
    <tr className=' bg-white border hover:bg-orange-50'>
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
