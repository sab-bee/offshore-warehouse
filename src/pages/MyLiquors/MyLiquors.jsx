import React, { useEffect, useState } from 'react'
import bin from '../../assets/icon/bin.svg'
import axios from 'axios'
import { AnimatePresence, motion } from 'framer-motion'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/firebase.init'
import { useNavigate } from 'react-router-dom'
import { Modal, Spinner } from '../../components'
import { signOut } from 'firebase/auth'

const MyLiquors = () => {
  const [liquors, setLiquors] = useState([])
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  const [fetched, setFetched] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [_id, set_id] = useState('')

  useEffect(() => {
    axios
      .get('https://pacific-oasis-60084.herokuapp.com/api/my_liquors', {
        params: {
          email: user?.email,
        },
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        setFetched(true)
        setLiquors(res.data)
      })
      .catch((error) => {
        if (error.response.status === 403 || 401) {
          signOut(auth)
          navigate('/user/login')
        }
      })
  }, [user, navigate])

  const removeFromMyList = (_id) => {
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
      })
  }

  return liquors.length === 0 ? (
    <Spinner></Spinner>
  ) : (
    <>
      <AnimatePresence>
        {showModal && (
          <Modal confirm={confirm} setShowModal={setShowModal}></Modal>
        )}
      </AnimatePresence>
      <div className='w-full md:w-4/5 lg:w-1/2 mx-auto bg-gray-50 p-6 rounded-2xl my-12 min-h-screen'>
        <div className='grid grid-cols-4 justify-items-center'>
          <p className='font-medium'>product</p>
          <p className='font-medium'>price</p>
          <p className='font-medium'>quantity</p>
          <p className='font-medium'>action</p>
        </div>

        {liquors.length === 0 && fetched ? (
          <div className='grid justify-items-center gap-y-5'>
            <p className='mt-5 font-semibold text-red-400'>
              this user haven't added any item yet
            </p>
            <button
              className='bg-primary text-white p-2 rounded'
              onClick={() => navigate('/addProduct')}
            >
              add item now
            </button>
          </div>
        ) : undefined}
        {liquors.map((liquor, index) => (
          <motion.div
            key={liquor._id}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.2,
              ease: 'easeInOut',
              delay: index * 0.1,
            }}
          >
            <MyLiquor
              liquor={liquor}
              removeFromMyList={removeFromMyList}
            ></MyLiquor>
          </motion.div>
        ))}
      </div>
    </>
  )
}

function MyLiquor({ liquor, removeFromMyList }) {
  const { productName, productPrice, thumbnail, quantity, _id } = liquor
  return (
    <div className='grid grid-cols-4 bg-white my-5 items-center justify-items-center rounded-2xl hover:bg-gray-100'>
      <div className='flex items-center '>
        <img className='h-10' src={thumbnail} alt='' />
        <p>{productName}</p>
      </div>
      <p>$ {productPrice}</p>
      <p>{quantity}</p>
      <button>
        <img src={bin} alt='' onClick={() => removeFromMyList(_id)} />
      </button>
    </div>
  )
}

export default MyLiquors
